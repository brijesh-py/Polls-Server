# Polls API

## Overview
This API allows users to retrieve polls, vote on a poll, and view poll details.

## Endpoints

### 1. Get All Polls
**GET** `/api/polls`

#### Description:
Retrieves a list of all available poll questions.

#### Response Example:
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "question": "What's your favorite color?",
  }
]
```

---

### 2. Get a Specific Poll
**GET** `/api/polls/:id`

#### Description:
Retrieves a single poll by its `id`.

#### Response Example:
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "question": "What's your favorite color?",
  "options": [
    { "text": "Red", "votes": 10 },
    { "text": "Blue", "votes": 15 },
    { "text": "Green", "votes": 7 }
  ]
}
```

---

### 3. Vote on a Poll
**POST** `/api/polls/:id`

#### Description:
Adds a vote to a specific option within a poll.

#### Request Body Example:
```json
{
  "option": "Blue"
}
```

#### Response Example:
```json
{
  "success": true,
  "poll": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "question": "What's your favorite color?",
    "options": [
      { "text": "Red", "votes": 10 },
      { "text": "Blue", "votes": 16 },
      { "text": "Green", "votes": 7 }
    ]
  }
}
```