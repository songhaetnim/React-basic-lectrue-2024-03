import '../apps/App.css';


export default function Header( {filters, filter, onFiterChange}) {
   return(
    <haader>
      <ul>
        {
          filters.map((value, index) => (
            <li key={index}>
              <button onClick={() => onFiterChange(value)}>{value}</button>
            </li>
          ))
        }
      </ul>
      <hr />
    </haader>
   );
}
  
