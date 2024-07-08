import Button from "react-bootstrap/Button";

const FlightRow = ({ source, destination, duration, isFull }) => {
  const handleClick = () => {
    alert(
      `Booking flight from ${source} to ${destination} (${(
        duration / 60
      ).toFixed(2)} hours).`,
    );
  };

  return (
    <tr>
      <td>{source}</td>
      <td>{destination}</td>
      <td>{(duration / 60).toFixed(2)}h</td>
      <td>
        <Button
          disabled={isFull}
          onClick={handleClick}
          size="sm"
          variant="primary"
        >
          Book
        </Button>
      </td>
      <td>{isFull ? "Full" : "Available"}</td>
    </tr>
  );
};

export default FlightRow;
