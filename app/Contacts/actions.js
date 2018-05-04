import axios from 'axios';

const allHighlights = () => {
  
  return {
    type: "ALL_HIGHLIGHTS",
    payload: axios({
      method: 'get',
      url: 'https://api.backendless.com/115DC970-7689-C50E-FF6B-5F94AFFFA900/0A3575C9-7BEF-4CBA-FF55-7C5806658300/data/highlights?sortBy=title%20asc'
    })
  }

}

export {
  allHighlights
}