import '../apps/App.css';

export default function Card() {                         
    const peson = {name: 'James', job: 'Programmer'};
  
    return (                      
  
     <>                                       
      <h1 style={{backgroundColor:"beige"}}>name: {peson.name}</h1>
      <hr />    
      <img src="https://picsum.photos/200/200?q=0" className="photo" />   
      <br />     
      <h3>jpb:{peson.job}</h3>
       </>
    );
  }
  
  
  
  