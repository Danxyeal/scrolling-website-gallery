import React, {
    useState,
    useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import { enGB, enUS } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './App.css';
import Selfie from './Selfie';

export default function Gallery ({ publicEvent }) {
    const mainUrl = process.env.REACT_APP_URL;
    const cloudinaryCloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
    const [ selfies, setData ] = useState(null);
    const [ daySelected, setDay ] = useState(new Date());
    const { campaign, color } = useParams();

    const getDate = selfie => {
        const today = new Date();
        if (daySelected.toLocaleDateString() === today.toLocaleDateString()) {
            return true;
        }
        const selfieDate = new Date(selfie.createDate);
        const dateString = selfieDate.toLocaleDateString();
        return (dateString === daySelected.toLocaleDateString());
    }
    const isUS = navigator.languages.some(language => language === 'en-US');
    const userLocale = isUS ? enUS : enGB;
    const dateFormat = isUS ? 'MM/dd/yyyy' : 'dd/MM/yyy';

    useEffect(() => {
        fetch(`${mainUrl}/api/v1.0/gallery/${campaign}/${publicEvent}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, [mainUrl, campaign, publicEvent, daySelected]);
    if (selfies) {
        return (
            <div className={`App ${color}`}>
                <h1>Please select the date you uploaded your photo</h1>
                <DatePicker date={daySelected} onDateChange={setDay} locale={userLocale} format={dateFormat}>
                  {({ inputProps, focused }) => (
                    <input
                      className={`${color} input` + (focused ? ' -focused' : '')}
                      {...inputProps}
                    />
                  )}
                </DatePicker>
                <CloudinaryContext cloudName={cloudinaryCloudName}>
                    {selfies.filter(getDate).map(selfie => <Selfie color={color} key={selfie._id} url={mainUrl+selfie.url} />)}
                </CloudinaryContext>
            </div>
        )
    } else {
        return null;
    }
}
