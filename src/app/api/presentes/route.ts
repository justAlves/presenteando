import supabaseClient from "@/services/supabaseClient"

export async function POST(req: Request){
  try {
    const formData = await req.formData()
    const names = formData.get('names')
    const message = formData.get('message')
    const url = formData.get('url')
    const files = formData.getAll('files') as File[]
    const music = formData.get('music')

    if(!names || !message || !url || !files){
      return Response.json({
        status: 400,
        body: {
          message: 'Missing required fields'
        }
      })
    }

    const fileUrls: string[] = []

    for(const file of files){
      const filePath = `${Date.now()}-${file.name}`;

      const { data: _, error: uploadError } = await supabaseClient.storage
        .from('presentes')
        .upload(
          filePath, 
          file,
          {
            cacheControl: '3600',
            upsert: false
          }
        )

      if(uploadError){
        return Response.json({
          status: 500,
          body: {
            message: 'Error uploading file',
            error: uploadError
          }
        })
      }

      const { data: publicUrl } = supabaseClient.storage
        .from('presentes')
        .getPublicUrl(filePath);

      if(publicUrl){
        fileUrls.push(publicUrl.publicUrl)
      }
    }

    const { data, error } = await supabaseClient
      .from('pages')
      .insert({
        names,
        message,
        url,
        imagesUrl: fileUrls,
        music: music ? music : null,
      })
      .select()

    if(error){
      return Response.json({
        status: 500,
        body: {
          message: 'Error inserting data'
        }
      })
    }

    return Response.json({
      status: 200,
      data
    })

  } catch (error) {
    return Response.json({
      status: 500,
      body: {
        message: 'Internal server error',
        error
      }
    })
  }
}