export function List ({listTv}){
    return (
        <>
        <section className="row">
        {listTv.map((tv, index)=>
        <div key={index} className="card col-3 m-5">
            {tv.show.image && (
                <img src={tv.show.image.medium}  className="card-img-top" alt={tv.show.name}/>
            )}
            <div className="card-body">
            <h5 className="card-title">{tv.show.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{tv.show.type}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary" >{tv.show.genres.map((genre)=>
                <a className="m-1">{genre}</a>
            )}</h6>
            </div>
        </div>
        )}
       </section>
        </>
    )
}