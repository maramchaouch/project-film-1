
function Sections() {
    let films = [
        { image: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg' , title: 'captainn marvel', price: '20£' },
        { title: 'https://th.bing.com/th/id/OIP.QloUs0iFg4CCaFwhd7-dcwAAAA?rs=1&pid=ImgDetMain', desc: 'what man wants', price: '750£' },
        { title: 'https://th.bing.com/th/id/R.d8a10437924b2da1cce487bebd51d42b?rik=Ykd38rnRNr%2fl6g&pid=ImgRaw&r=0', desc: 'the prodigy', price: '850£' },
        { title: 'https://th.bing.com/th/id/R.d3736c60d09ac379c97df41450b33fa6?rik=yMNE0BxwLvBrkQ&pid=ImgRaw&r=0', desc: 'the con is on', price: '150£' },
        { title: 'https://th.bing.com/th/id/R.2aa9c50edb65f21acefe7687d4bb02e3?rik=tx29%2b51t6i%2f2gw&pid=ImgRaw&r=0', desc: 'sang froid', price: '900£' },
        { title: 'https://th.bing.com/th/id/OIP.EHfmzfkFZrUpmkKXX9NCZAAAAA?rs=1&pid=ImgDetMain', desc: 'her boyfriends secret', price: '1200£' },
        { title: 'https://th.bing.com/th/id/R.3b96abf48802ffbd1182bb57c649fbd4?rik=MK6fhn2OtS%2bR8w&pid=ImgRaw&r=0', desc: 'avengers endgame', price: '800£' },
        { title: 'https://www.imdb.com/title/tt1517268/mediaviewer/rm431105281/?ref_=ext_shr_lnk', desc: 'barbie2023', price: '1100£' },
        { title: 'https://th.bing.com/th/id/R.1281e1de145d817073a5b55d70b61907?rik=kNLcTdg9Bs1Qjg&pid=ImgRaw&r=0', desc: 'bookshop', price: '950£' },
        { title: 'https://th.bing.com/th/id/OIP.hfcyi5cwD7ynLO5WVsiNNAHaLH?rs=1&pid=ImgDetMain', desc: 'divergent', price: '700£' }
      ];
return(
    <div className='films' style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        {films.map((product)=>{
        return( <Sections props={product}/>)
         } )}
    </div>
)
        }

export default Sections;