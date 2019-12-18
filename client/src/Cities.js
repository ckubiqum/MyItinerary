import React from 'react';
import './Cities.css';
import { connect } from 'react-redux';
import { fetchCities } from './store/actions/cityAction';
import { Link } from 'react-router-dom';


class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cities: [],
            result: ""
        };
    }


    componentDidMount() {
        // fetch("/cities-route/all")
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);

        //         this.setState({
        //             isLoaded: true,
        //             cities: result
        //         });
        //     })
        //     .catch(error => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     })

        this.props.fetchCities();
    }

    onChangeHandler = (e) => {
        this.setState({
            result: e.target.value,
        });
        console.log(this.state.cities);
        console.log(e.target.value);

    }

    render() {
        console.log(this.props.cities);

        let filteredCities = this.props.cities.filter(city => city.city.toUpperCase().startsWith(this.state.result.toUpperCase()) || city.country.toUpperCase().startsWith(this.state.result.toUpperCase()));


        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (filteredCities.length === 0) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="city-list">
                    <div>
                        <p>{this.state.result}</p>
                        <p>Busca una ciudad:</p><input type="text" onChange={this.onChangeHandler} placeholder="Buscar..."></input>
                    </div>
                    <h1> All cities </h1>


                    {filteredCities.map(city => (
                        <Link key={city._id} to={"/itineraries/" + city._id}>
                            <p>
                                {city.city} - {city.country}
                            </p>
                        </Link>))}
                </div>
            );
        }
    }
}
const mapStateToProps = state => ({
    cities: state.cities.cities
});

// router.post('/', (req, res) => {
//     const newCity = new cityModel({
//         city: req.body.city,
//         country: req.body.country
//     })
//     newCity.save()
//         .then(city => {
//             res.send(city)
//         })
//         .catch(err => {
//             res.status(500).send("Server error")
//         })
// });

export default connect(mapStateToProps, { fetchCities })(Cities)
