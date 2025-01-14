function New ({image,authonName,bookName}){
    
 return(
    <div style={
        {
         border:'2px solid ',
         display:'inline-block',
         boxShadow:'10px 10px 10px ',
         margin:'30px',
         padding:'10px'
        }
    }>
       <img src={image}  style={{boxShadow:'10px 10px 15px black', margin:'0px'}} />
       <h2>{bookName}</h2>
       <p>{authonName}</p>
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