import styled from "styled-components"

const NumberSelector = ({selectedNumber,setSelectedNumber, error, setError}) => {
    const arrNumber=[1,2,3,4,5,6];
    
    const numberSelector=(value)=>{
      setSelectedNumber(value);
      setError("");
    };

  return (
    <NumberSelectorContainer> 
      <p className="error">{error}</p>
      <div className="flex">
      {
        arrNumber.map((value,i)=>(
            <Box key={i}
             
            isSelected={value===selectedNumber}    
             
            onClick={()=>numberSelector(value)}
            >{value}</Box>
        ))
       }
      </div>
      <p>Number Selector</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector

const NumberSelectorContainer=styled.div`

.error{
  color: red;
}

.flex{
  display:flex;
  gap: 24px;
}

p{
  font-size: 24px;
  font-weight: 700;
  direction:rtl;
}


`

const Box=styled.div`

height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background-color: ${(props)=> (props.isSelected ? "black": "white")};
color: ${(props)=> (props.isSelected ? "white": "black")};
`