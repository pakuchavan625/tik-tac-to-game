


interface IBlockProps{
    value : string,
    onClick :()=> void,
    style :{
        backgroundColor :string
    }
}

const Block = ({value, onClick,style } : IBlockProps) => {
  return (
    <div className="block" onClick={onClick} style={style}>{value}</div>
  )
}

export default Block