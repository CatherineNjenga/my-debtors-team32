import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/school-register.css';
import '../styles/schoolsadmin.css';
const SchoolRegistrationComp = () => {
  const [showNext, setShowNext] = useState(false);
  return (
    <div className='reg tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      {!showNext && (
        <div>
          <header class='first-reg'>
            <h2>School Registration</h2>
          </header>
          <main>
            <form className='Reg-form'>
              <div className='form-group'>
                <label htmlFor='reg-parent' className='reg-label'>
                  Name of School
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-parent'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-category' className='reg-label'>
                  School Category
                </label>
                <select name="schselect" className='reg-input' required id="reg-input">
                <option selected value="Public">Select School Category</option>
                  <option value="Public">Public School</option>
                  <option value="Private">Private School</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='reg-contact' className='reg-label'>
                  Description
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-contact'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-schaddress' className='reg-label'>
                  School Address
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-schaddress'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-num' className='reg-label'>
                  Contact Number
                </label>
                <input type='tel' className='reg-input' id='reg-num' required />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-email' className='reg-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='reg-input'
                  id='reg-parent'
                  required
                />
              </div>

              <div className='reg-doc'>
                <div>
                  <h3 className='reg-text'>Upload document</h3>
                </div>
                <div>
                  <p className='reg-text--2'>
                    The certificate for schools <br />
                    <br />
                    School registration certificate <br />
                    <br />
                    Approval by ministry of Education
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className='reg-title'>
             <form action="">
              <div>
                <label htmlFor="file1">The certificate for schools:</label><br /><br />
                <div className="file-lab">
                <input type="file" id="myFile" name="filename"/>
                </div><br />
                <label htmlFor="file1">School registration certificate:</label><br /><br />
                <div className="file-lab">
                <input type="file" id="myFile" name="filename"/>
                </div><br />
                <label htmlFor="file1">Approval by ministry of Education:</label><br /><br />
                <div className="file-lab">
                <input type="file" id="myFile" name="filename"/>
                </div>
              </div>
             </form>

              </div> <br /><br />
              <label htmlFor='' className='reg-label'></label>
              <input
                type='submit'
                value='Upload Document'
                className='reg-input reg-btn01'
              />
            </form>
            <div className='next-btn'>
              <button id='next-nav' onClick={() => setShowNext(true)}>
                Next
              </button>
            </div>
          </main>
        </div>
      )}
      {showNext && (
        <div class='f-item-1'>
          <h2 id='Sch-admin'>School admin</h2>

          <form class='form'>
            <label for='name' id='lab'>
              Name of proprietor
            </label>
            <input type='text' class='proname' id='text' />
            <br />
            <br />

            <label for='email' id='lab'>
              Proprietor's Email
            </label>
            <input type='Email' class='proemail' id='email' />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input type='number' class='pronumber' id='number' />
            <br />
            <br />

            <label for='name' id='lab'>
              Name of principal
            </label>
            <input type='text' class='prinname' id='text' />
            <br />
            <br />

            <label for='email' id='lab'>
              Principal's Email
            </label>
            <input type='email' class='prinemail' id='email' />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input type='number' class='pronumber' id='number' />
            <br />
            <br />

            <label for='name' id='lab'>
              Name of Busar
            </label>
            <input type='text' class='burname' id='text' />
            <br />
            <br />

            <label for='email' id='lab'>
              Bursar's Email
            </label>
            <input type='email' class='buremail' id='email' />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input type='number' class='pronumber' id='number' />
            <br />
            <br />
            <Link
              to='/dashboard'
              class='tw-w-full tw-rounded-lg tw-bg-blue-800 tw-px-8 tw-py-2 tw-text-white tw-no-underline tw-shadow-lg tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
            >
              Submit
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default SchoolRegistrationComp;