import React from 'react';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {

        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

    };

    const orderDetails = (input) => {
        
        try {
            async function helper() {
                const data = fetch("/orderRelatedQuery", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: input })

                })
                const response = await data;
                if (!response.ok) {
                    console.log("shit error aagya")
                    return;

                }
                const response2 = await response.json()
                console.log(response2)

            }

            helper()

        } catch (Err) {
            console.log(Err)
        }

        




        setState((prev) => ({
            ...prev,
            messages: [...prev.messages],
        }));

    }




    const handleOrderDetails = (message) => {
        // const botMessage = createChatBotMessage('Hello welcome to gusro how can I help you?');
        try {

            async function helper() {
                // const botMessageNew = createChatBotMessage(response)
                const response = fetch('/chatbotRequest', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: message }),
                })
                const response2 = await response;
                if (!response2.ok) {
                    console.log("shit error aagya")
                    return;

                }
                const data3 = await response2.json();
                const data4 = data3.message;
                createChatBotMessage(data4)
                console.log(data4)
                const botMessage = createChatBotMessage(data4)
                setState((prev) => ({
                    ...prev,
                    messages: [...prev.messages, botMessage],
                }));
            }

            helper()



        } catch (err) {
            console.log(err, ":error")
        }
    }





    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { handleHello, handleOrderDetails, orderDetails },
                });
            })}
        </div>
    );
};

export default ActionProvider;