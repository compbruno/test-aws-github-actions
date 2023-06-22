const { newSupplierCardMovedFunction } = require("../src/newSupplierCardMovedFunction");
const sqsSimplify = require("../customLibs/nodejs/node_modules/sqsSimplify");
const AWSMock = require("aws-sdk-mock");

jest.mock('sqsSimplify')

test('_200 works', () => {
    const event = {
        body: JSON.stringify({
          data: {
            action: "card.move",
            from: { id: 123, name: "Inbox" },
            to: { id: 345, name: "Doing" },
            moved_by: {
              id: 12345,
              name: "John Doe",
              username: "john-doe",
              email: "john.doe@email.com",
              avatar_url: "https://uma.url/avatar.png",
            },
            card: { id: 654321, title: "Prospect 1", pipe_id: "CxeXHeOR" },
          },
        }),
    }
    sqsSimplify.sendMessage.mockResolvedValue({})
    return newSupplierCardMovedFunction({ event: event }).then(res => {
        expect(res.statusCode).toBe(201);
        expect(event.body).toBe(event.body);
    })
});