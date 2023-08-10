import axios from 'axios';
import './hotel.css';
import { useCallback, useEffect, useState } from 'react';
import ShimmerUI from '../loader/shimmer';
import Card from '../card/card';

let hotelList: any = [];
export default function Hotel() {
    const [hotelData, setHotelData] = useState([]);
    const [dataNotFound, setSearchUI] = useState(false);


    useEffect(() => {
        getHotelData();
    }, [])

    function getHotelData() {
        axios.get("http://localhost:4000/uttarpradesh").then(res => {
            hotelList = res?.data?.vanarsi?.hotels;
            setHotelData(hotelList);
        })
    }
    const getFilteredHotelData = (value: any) => {
        const filterData = hotelList.filter((data: any) =>
            data?.name.toLowerCase().includes(value.toLowerCase())
        );
        if (filterData?.length === 0) {
            setSearchUI(true);
        } else {
            setSearchUI(false);
        }
        setHotelData(filterData);
    }

    const debounceFunction = (fn: Function, delay: number) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    //using useCallback hook to return memoized callback function everytime.
    const optimizedFunction = useCallback(debounceFunction(getFilteredHotelData, 500), []);

    function inputSearchBar() {
        return (
            <div className="mb-4 mt-2">
                <input type="text" onChange={(event) => optimizedFunction(event.target.value)} placeholder="Search Hotels ..."
                    style={{ padding: '8px', borderRadius: '8px', width: '350px' }} />
            </div>
        )
    }

    function getUIData() {
        return (
            <div>
                {hotelData.map((item: any) => {
                    return <Card {...item} />
                })}
            </div>
        )
    }

    function completeUI() {
        return (
            hotelData.length === 0 && dataNotFound === false ?
                <ShimmerUI /> :
                <div>
                    {inputSearchBar()}
                    {hotelData?.length !== 0 && dataNotFound === true ?
                        <div>
                            <h3> No Data Found</h3>
                        </div> :
                        getUIData()
                    }
                </div>

        )

    }


    return (
        <div className='hotel_container'>
            {completeUI()}
        </div>
    )
}