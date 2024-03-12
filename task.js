const restApi=async()=>{
    const fetchs= await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const requests= await fetchs.json()
    console.log(requests.game_indices);
  }
  restApi()