import React from 'react';
import PageHeader from '../../components/PageHeader';


import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function TeachersList() {
  return (
    <div id="page-teachers-list" className="container">
      <PageHeader title="These are the available Proffys for you">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Week day</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeachersList;