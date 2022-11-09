import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDisable: true,
      nextDisable:
        this.refs && this.refs.offsetWidth >= this.refs.scrollWidth
          ? true
          : false,
    };
  }

  componentDidMount() {
    this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
  }
  checkButtons = (offsetWidthValue, scrollWidthValue) => {
    this.setState({
      prevDisable: this.refs.scrollLeft <= 0 ? true : false,
      nextDisable:
        this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue
          ? true
          : false,
    });
  };

  render() {
    const offsetWidthValue = this.refs.offsetWidth,
      scrollWidthValue = this.refs.scrollWidth;
    return (
      <div
        className="slider-container"
        ref={(el) => {
          this.refs = el;
        }}
      >
        <div className="slider-wrapper">{this.props.children}</div>
        <div
          className={`btn prev ${this.state.prevDisable ? 'disable' : ''}`}
          disabled={this.state.prevDisable}
          onClick={() => {
            this.refs.scrollLeft -= offsetWidthValue / 2;
            this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
        >
          {'<'}
        </div>
        <div
          className={`btn next ${this.state.nextDisable ? 'disable' : ''}`}
          disabled={this.state.nextDisable}
          onClick={() => {
            this.refs.scrollLeft += offsetWidthValue / 2;
            this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
        >
          {'>'}
        </div>
      </div>
    );
  }
}

export default class SliderParent extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1100,
      slidesToScroll: 4,
      slidesToShow: 4,
    };
    return (
      
        <Slider {...settings}>
        <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p1-levis.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p2-adidas.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p3-campus.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p4-puma.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p6-uspa.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p7-crocs.jpg"
              />
            </Card>
          </div>
        </Slider>
    );
  }
}


