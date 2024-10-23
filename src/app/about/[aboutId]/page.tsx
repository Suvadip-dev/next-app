export default function about({params} : {params: {aboutId: string}}) {
 return <h1>{params.aboutId}</h1>
}
