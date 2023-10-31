import { useParams } from "react-router-dom";

export function Show(){
    const params = useParams()
    return <h1>ceci est la page de show numero: {params.id}</h1>
}