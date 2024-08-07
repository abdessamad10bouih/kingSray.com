import React from 'react';
import Button from './button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';


const Search = () => {
    const calendarStyle = {
        inputText:{
            root: ({props, context}) => ({
                className: classNames(
                    
                )
            })
        }
    };
  return (
      <div className='w-full h-36 flex justify-center items-center'>
          <div className='w-[95%] h-[90%] md:w-[80%] md:h-[80%] md:p-10 md:flex-nowrap gap-3 bg-white flex items-center justify-center rounded-2xl flex-wrap'>
              <div className='md:w-[80%] md:h-[8vh] w-28 h-12 rounded-xl bg-bg flex items-center p-2'>
                <FontAwesomeIcon className='text-xl ml-4 md:text-2xl text-primary' icon={faCalendar} />
                <Calendar style={{ width: '100%', marginLeft: '10px', height: '100%' }} placeholder='Check In' inputStyle={{ background: '#EEF5FF' }} panelStyle={{ background: '#EEF5FF', width: '300px', borderRadius: '20px' }} />
              </div>
              <div className='md:w-[80%] md:h-[8vh] w-28 h-12 rounded-xl bg-bg flex items-center p-2'>
                  <FontAwesomeIcon className='text-xl ml-4 md:text-2xl text-primary' icon={faCalendar} />
                  <Calendar style={{ width: '100%', marginLeft: '10px', height: '100%' }} placeholder='Check Out' inputStyle={{ background: '#EEF5FF' }} panelStyle={{ background: '#EEF5FF', width: '300px', borderRadius: '20px' }} />
              </div>
              <div className='md:w-[80%] md:h-[8vh] w-28 h-12 rounded-xl bg-bg flex items-center p-2'>
                  <FontAwesomeIcon className='text-xl ml-4 md:text-2xl text-primary' icon={faUserCircle} />
                  <input type="text" className='w-full h-full ml-2 bg-bg pl-1 focus:outline-none' placeholder='Guests' />
              </div>
              <Button className={`w-full h-[8vh]`}>Search</Button>
          </div>
      </div>
  )
}

export default Search
