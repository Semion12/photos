import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { Menu } from './components/navigation';
import { Collection } from './components/collection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/pagination';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#eee',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',


  },
  container: {
    padding: '100px 30px',

  }

})
function App() {
  const classes = useStyles()
  const [collection, setCollection] = useState([])
  const [names, setNames] = useState([])
  const [page, setPage] = useState(2)
  const [inputValue, setInputValue] = useState('')
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://63b47a699f50390584b1f207.mockapi.io/collection?page=${page}&limit=2&category=${currentCategory != 0 ? currentCategory : ''}`)
    .then(({ data }) => {
      setCollection(data)
    }).finally(()=>{
      
      setIsLoading(false)
    })
    console.log(1)
  }, [currentCategory, page])
  useEffect(() => {
    {
      axios.get('https://63b47a699f50390584b1f207.mockapi.io/names').then(({ data }) => {
        setNames(data)
      })
    }
  }, [])

  const changeInputValue = (e) => {
    setInputValue(e)
  }
  const ChangeCurrentCategory = (event, newValue) => {
    setCurrentCategory(newValue);
  };

  const changePage = (event, page)=>{
    
    setPage(page)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant='h4'>
          Моя коллекция фотографий
        </Typography>
        {names && <Menu
          categories={names}
          inputValue={inputValue}
          changeInputValue={changeInputValue}
          currentCategory={currentCategory}
          ChangeCurrentCategory={ChangeCurrentCategory}
        />}
        {isLoading && <Typography variant='h2'>Идет загрузка...</Typography>}
        {collection && 
          collection.filter((obj) => {
            return (obj.name.toLowerCase().includes(inputValue.toLowerCase()))
          })
            .map((obj, index) => {

              return <Collection key={index} name={obj.name} category={obj.category} photos={obj.photos} />
            })
        }
        <Pagination page = {page} changePage = {changePage} />

      </div>


    </div>
  );
}

export default App;
