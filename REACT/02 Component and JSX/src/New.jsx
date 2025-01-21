function New ({details}){
    
 return(
    <div  style={
        {
         border:'2px solid ',
         display:'inline-block',
         boxShadow:'10px 10px 10px ',
         margin:'30px',
         padding:'10px'
        }
    }>
       <img src={details.img}  style={{boxShadow:'10px 10px 15px black', margin:'0px',height:'500px', width:'338px'}} />
       <h2>{details.bookName}</h2>
       <p>{details.authorName}</p>
       <p>199</p>
       <button style={
        {
            backgroundColor:'rgb(255, 216, 20)'
        }
       }>Add to Cart</button>
    </div>
 )
}
export default New;