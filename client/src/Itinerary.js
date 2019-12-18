import React from 'react';
import { connect } from 'react-redux';
import { fetchItineraries } from './store/actions/itineraryAction';
import Activities from './Activities.js';
import './Cities.css';

class Itineraries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            itineraries: [],
            selectedId: ""

        };
    }

    componentWillReceiveProps(newProps) {
        console.log("old: ", this.props)
        console.log("new: ", newProps)
        this.setState({
            itineraries: newProps.itineraries
        })
    }

    componentDidMount() {
        this.props.fetchItineraries(this.props.match.params.cityId);
    }

    myFunction = (newId) => {
        this.setState({
            selectedId: newId

        })
    }

    render() {
        console.log(this.props);

        const { error, itineraries } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (itineraries.length === 0) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="itinerary-list">




                    {itineraries.map(itinerary => (

                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#" + itinerary._id} aria-expanded="true" aria-controls={itinerary._id}>


                                            <p onClick={() => this.myFunction(itinerary._id)}>
                                                {itinerary.name} - {itinerary.cityName}
                                            </p>      </button>
                                    </h5>
                                </div>

                                <div id={itinerary._id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        {this.state.selectedId === itinerary._id ? <Activities itiId={itinerary._id} /> : ""}

                                    </div>
                                </div></div></div>

                    ))}</div>


            );
        }
    }
}
const mapStateToProps = state => ({
    itineraries: state.itineraries.itineraries
});

export default connect(mapStateToProps, { fetchItineraries })(Itineraries)