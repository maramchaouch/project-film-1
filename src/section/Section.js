import Sections from './Sections';


function Section(props) {
    let {Image,title,price}={...props};
    return (
   
    <div className="d-flex justify-content-around">
      <Sections style={{ width: '18rem' }}>
        <Sections.Img variant="top" src="holder.js/100px180" />
        <Sections.Body>
          <Sections.Image>{Image}</Sections.Image>
          <Sections.Title>
           {title}
          </Sections.Title>
          <Sections.Price>
            {price}
          </Sections.Price>
          <Button variant="primary">Book Here</Button>
        </Sections.Body>
      </Sections>

      
    </div>
  )
  ;
}

export default Section;