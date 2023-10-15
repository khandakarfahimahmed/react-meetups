import { useHistory } from "react-router-dom";
import NewMeetupform from "../components/meetups/NewMeetupForm";

function NewMeetupPage(params) {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-dad17-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupform onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
