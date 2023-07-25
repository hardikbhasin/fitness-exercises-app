
export const exerciseOptions = {

    method: 'GET',

    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'd8de15af0fmshd0fc820092f57adp181ecejsn28f8c61cf742'
        
    },
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd8de15af0fmshd0fc820092f57adp181ecejsn28f8c61cf742',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};