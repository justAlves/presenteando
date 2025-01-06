import supabaseClient from "@/services/supabaseClient"

export async function GET(
  req: Request,
  { params }: {  params: Promise<{ url: string }> }
){
  const url = (await params).url

  if(!url){
    return Response.json({
      status: 400,
      body: {
        message: 'Missing required fields'
      }
    })
  }

  const { data, error } = await supabaseClient
    .from('pages')
    .select()
    .eq('url', url)
    .single()

  if(error){
    return Response.json({
      status: 500,
      body: {
        message: 'Error fetching page',
        error
      }
    })
  }

  if(!data){
    return Response.json({
      status: 404,
      body: {
        message: 'Page not found'
      }
    })
  }

  return Response.json({
    status: 200,
    body: data
  })
}