import React, { useEffect, useState } from 'react'
import { Box, Stack, Button, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, [])
  const handelSearch = async () => {
    console.log("searching..");
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setSearch(''); // clear the search if found;
      setExercises(searchedExercises);
    }

  }
  return (

    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={"700"} sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }} mb="50px" textAlign={"center"}>
        Awesome Exercises You <br />Should Know 🧠💡
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#FFF',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn'
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: '56px',
            position: 'absolute',
            right: "0"
          }}
          onClick={handelSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width : '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

      </Box>
    </Stack>

  )
}

export default SearchExercises
