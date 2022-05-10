type Props = {
  title: string
  lists: string[]
}

const Contents = (props: Props) => {
  const Lists = props.lists;
  return(
   <>
    <h2>
      {props.title}
    </h2>
    <ul>
      {
        Lists.map( list => (
          <li key={list}>{list}</li>
        ))
      }
    </ul>
    
   </>
  )
}
export default Contents