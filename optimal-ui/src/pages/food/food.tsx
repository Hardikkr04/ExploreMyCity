import axios from 'axios';
import './food.css';
import { useCallback, useEffect, useState } from 'react';
import ShimmerUI from '../loader/shimmer';
import Card from '../card/card';

let foodList: any = [];
export default function Food() {
    const [foodData, setFoodData] = useState([]);
    const [dataNotFound, setSearchUI] = useState(false);


    useEffect(() => {
        getFoodData();
    }, [])

    function getFoodData() {
        axios.get("http://localhost:4000/uttarpradesh").then(res => {
            foodList = res?.data?.vanarsi?.foods;
            setFoodData(foodList);
        })
    }
    const getFilteredFoodData = (value: any) => {
        const filterData = foodList.filter((data: any) =>
            data?.name.toLowerCase().includes(value.toLowerCase())
        );
        if (filterData?.length === 0) {
            setSearchUI(true);
        } else {
            setSearchUI(false);
        }
        setFoodData(filterData);
    }

    const debounceFunction = (fn: Function, delay: number) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    //using useCallback hook to return memoized callback function everytime.
    const optimizedFunction = useCallback(debounceFunction(getFilteredFoodData, 500), []);

    function inputSearchBar() {
        return (
            <div className="mb-4 mt-2">
                <input type="text" onChange={(event) => optimizedFunction(event.target.value)} placeholder="Search Foods ..."
                    style={{ padding: '8px', borderRadius: '8px', width: '350px' }} />
            </div>
        )
    }

    function getUIData() {
        return (
            <div>
                {foodData.map((item: any) => {
                    return <Card {...item} />
                })}
            </div>
        )
    }

    function completeUI() {
        return (
            foodData.length === 0 && dataNotFound === false ?
                <ShimmerUI /> :
                <div>
                    {inputSearchBar()}
                    {foodData?.length !== 0 && dataNotFound === true ?
                        <div>
                            <h3> No Data Found</h3>
                        </div> :
                        getUIData()
                    }
                </div>

        )

    }


    return (
        <div className='food_container'>
            {completeUI()}
        </div>
    )
}