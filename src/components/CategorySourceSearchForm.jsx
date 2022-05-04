import React, { Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const CategorySourceSearch = ({ onCategorySourceSearch, news }) => {
  const [type, setType] = useState('category');
  const [country, setCountry] = useState('fr');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onCategorySourceSearch(
        `top-headlines?country=${country}&category=${category}&sources=&q=${searchQuery}`
      )
  })

  return (
    <Container fluid className={`heroContainer-${news.theme}`}>
      <Row className='justify-content-md-center'>
        <Col xs lg='8'>
          
          <Form className='mt-3'>
            
            <Form.Row>
              <Col md='12' sm='12' className='mb-3 '>
                <Form.Control
                  placeholder='Search Keywords (optional)'
                  name='searchQuery'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  null
)(CategorySourceSearch);
