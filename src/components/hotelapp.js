import { useState } from "react";
import "./hotelapp.css";

export const HotelApp = () => {
  const [days, setDays] = useState("");
  const [persons, setPersons] = useState("");
  const [aminity, setAminity] = useState(false);
  const [aminity1, setAminity1] = useState(false);
  const [advance, setAdvance] = useState("");
  const [roomRates, setRoomRates] = useState(0);
  const [amiRates1, setAmiRates1] = useState(0);
  const [amiRates2, setAmiRates2] = useState(0);
  const [amiRates, setAmiRates] = useState(0);
  const [addRates, setAddRates] = useState(0);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(false);

  const FullData = (
    roomRates,
    days,
    persons,
    amiRates2,
    amiRates1,
    addRates
  ) => {
    if (persons > 2) {
      setAddRates((addRates = 1000 * (persons - 2) * days));
    } else {
      setAddRates(0);
    }
    setAmiRates(amiRates1 + amiRates2);
    setTotal(roomRates * days + amiRates + addRates);
  };

  const secondEvent = () => {
    FullData(roomRates, days, persons, amiRates2, amiRates1, addRates);
    setValue(true);
  };
  return (
    <>
      <div className="main">
        {/* registration form  */}

        <div className="content">
          <h1>Registration Form</h1>
          <form action="#">
            {/* customer info  */}

            <fieldset className="customer_info">
              <h2>Customer Info</h2>
              <label htmlFor="customer_name">
                Name <small>*</small>
                <input
                  type="text"
                  id="customer_name"
                  name="customer_name"
                  required
                />
              </label>
              <label htmlFor="check-in_date">
                Check-in date <small>*</small>{" "}
                <input type="date" name="date" id="check-in_date" required />
              </label>
              <label htmlFor="days">
                Total No. of days <small>*</small>
                <input
                  type="number"
                  name="days"
                  id="days"
                  required
                  value={days}
                  onChange={(e) => {
                    setDays(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="persons">
                Total No. of persons <small>*</small>{" "}
                <input
                  type="number"
                  name="persons"
                  id="persons"
                  required
                  value={persons}
                  onChange={(e) => {
                    setPersons(e.target.value);
                  }}
                />
              </label>
            </fieldset>

            {/* room info  */}

            <fieldset className="room_info">
              <h2>Room Info</h2>
              <label htmlFor="room_type">
                Room Type
                <select
                  name="roomtype"
                  id="room_type"
                  value={roomRates}
                  onChange={(e) => {
                    setRoomRates(parseInt(e.target.value));
                  }}
                >
                  <option value="">--Select--</option>
                  <option value={2500}>Delux Room</option>
                  <option value={4000}>Suite Room</option>
                </select>
              </label>
              <h4>Amenities</h4>
              <label htmlFor="Ac">
                <input
                  type="checkbox"
                  name="Ac"
                  id="Ac"
                  className="amenities"
                  checked={aminity}
                  value={aminity ? 0 : 1000}
                  onChange={(e) => {
                    setAminity(!aminity);
                    setAmiRates1(parseInt(e.target.value));
                  }}
                />
                AC
              </label>
              <label htmlFor="locker">
                <input
                  type="checkbox"
                  name="locker"
                  className="amenities"
                  id="locker"
                  checked={aminity1}
                  value={aminity1 ? 0 : 300}
                  onChange={(e) => {
                    setAminity1(!aminity1);
                    setAmiRates2(parseInt(e.target.value));
                  }}
                />
                Locker
              </label>
            </fieldset>

            {/* advance payment  */}

            <fieldset className="payment">
              <label htmlFor="adv_payment">
                Advance
                <input
                  type="number"
                  name="number"
                  id="adv_payment"
                  min={500}
                  step={500}
                  value={advance}
                  onChange={(e) => {
                    setAdvance(e.target.value);
                  }}
                />
              </label>
            </fieldset>

            <button
              type="button"
              onClick={() => {
                secondEvent();
              }}
            >
              View
            </button>

            {/* showing required data  */}

            {value && (
              <div className="money">
                {/* bal amount  */}

                <div className="item">
                  <h3 className="info">Balance Amount</h3>
                  <h3 className="price" id="Bal_amt">
                    {total - advance}
                  </h3>
                </div>

                {/* total cost  */}

                <h1>Total cost :</h1>
                <div className="item">
                  {/* room cost(total)  */}

                  <h3 className="info"> Total Room Cost</h3>
                  <h3 className="price" id="Advance_amt">
                    {roomRates * days}
                  </h3>
                </div>

                {/* amenities cost (total) */}

                <div className="item">
                  <h3 className="info">Total Amenities Cost</h3>
                  <h3 className="price" id="pay_amt">
                    {amiRates}
                  </h3>
                </div>

                {/* additional cost (total)  */}

                <div className="item">
                  <h3 className="info">Total Additional Cost</h3>
                  <h3 className="price" id="add_amt">
                    {addRates}
                  </h3>
                </div>

                {/* overall cost  */}

                <div className="item">
                  <h3 className="info">Total Cost</h3>
                  <h3 className="price" id="total_amt">
                    {roomRates * days + amiRates + addRates}
                  </h3>
                </div>
              </div>
            )}
            <input type="submit" value="Submit" />
          </form>
        </div>

        {/* info data  */}

        <div className="data">
          <main>
            <h1>Room Rates</h1>
            <section className="item">
              <p className="info">Delux Room</p>
              <p className="price">2500/-</p>
            </section>
            <section className="item">
              <p className="info">Suite Room</p>
              <p className="price">4000/-</p>
            </section>
            <section className="item">
              <p className="info">AC</p>
              <p className="price">1000/-</p>
            </section>
            <section className="item">
              <p className="info">Locker</p>
              <p className="price">300/-</p>
            </section>
          </main>
          <main>
            <h1>Additional Charges</h1>
            <section className="item">
              <p className="info">upto 2 people</p>
              <p className="price">No change in Cost</p>
            </section>
            <section className="item">
              <p className="info">Per Day Cost for Extra Person</p>
              <p className="price">1000/-</p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
