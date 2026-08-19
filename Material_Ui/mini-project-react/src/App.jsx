 import Button from '@mui/material/Button';
 
import DeleteIcon from '@mui/icons-material/Delete';
// import './App.css'

function App() {
  

  return (
    <>
    <h1>Material Ui demo</h1>
      <Button variant="contained"  >Hello World</Button>
      <Button variant="contained"   color='success' size='small'> Disabled </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
        
       
    </>
  )
}

export default App
