import { Form, Button, Container } from 'react-bootstrap';
function ClientQuery()
{
    function handleSubmit()
    {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let message = document.getElementById('message').value;

    if (!name) {
        alert('Please enter your name.');
        return false;
    }

    if (!phone) {
        alert('Please enter your phone number.');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }
    if (!message) {
        alert('Please enter your message.');
        return false;
    }

    sendToWhatsApp();
    return false;
}

function validatePhone(phone) {
    const re = /^\d{10}$/; // Simple regex for a 10-digit phone number
    return re.test(phone);
}

function sendToWhatsApp()
{

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    console.log(name+" "+message+" "+phone)
    let whatsappMessage = `Name: ${name}\nMessage: ${message}\nPhone: ${phone}`;
    let whatsappUrl = `https://wa.me/+919715179095?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
}


    return(
        <div>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Reach us for any Queries</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter your Phone Number"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAddress" className="mb-3">
                        <Form.Label className="d-flex justify-content-left h5">Message</Form.Label>
                        <Form.Control
                            type="text"
                            name="message"
                            placeholder="Your Message"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="h5">
                        Submit
                    </Button>
                </Form>

            </Container>

        </div>
    )
}
export default ClientQuery;