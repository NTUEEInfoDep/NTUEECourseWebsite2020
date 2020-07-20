# NTUEECourse2020

2020 年新版電機系預選網站

## Contributors

前端：朱哲廣

後端：劉奇聖

## Quick Start (Development mode)

```shell
$ npm install
$ sudo docker-compose up    # This will watch backend code changes
$ npm run develop-client    # This will open webpack-dev-server for frondend
```

And then goto `http://localhost:8000`

## Directory Structure

    .
    ├── assets/                    - static assets
    ├── client/                    - frontend code
    ├── server/                    - backend code
        ├── routes/                - express routers
        └── database               - database-related codes
            ├── data/              - Non-secret data, e.g. course names
            ├── private-data/      - Secret data, e.g. student names and passwords
            ├── mongo/             - MongoDB-related codes
            ├── redis/             - RedisDB-related codes
            ├── database.js        - CLI for database operations
            └── gen_password.py    - Script for generating student passwords
    ├── Dockerfile                 - For deploy
    └── docker-compose.yml         - For development

# Backend Api

```
課程種類： "0"(實驗), "1"(大一必修), "2"(大二必修), "3"(大三必修)
```

註：沒在開放日期內 request api 都會發 503 status code

<table>
  <tr>
    <th>Method</th>
    <th>Route</th>
    <th>Request Body</th>
    <th>Response</th>
    <th>Description</th>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/session</td>
    <td></td>
    <td>
      Success: 200<br />
      JSON Response:<br />
<pre>
{
  userID: 學號(String)
}
</pre>
      Failed:<br />
      403: 沒登入
    </td>
    <td>Get user session data</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>/api/session</td>
    <td>
      type: <code>x-www-form-urlencoded</code><br />
      content:
      <table>
        <tr>
          <th>KEY</th>
          <th>VALUE</th>
        </tr>
        <tr>
          <td>userID</td>
          <td>學號(String)</td>
        </tr>
        <tr>
          <td>password</td>
          <td>密碼(String)</td>
        </tr>
      </table>
    </td>
    <td>
        Success: 201<br />
        JSON Response:<br />
<pre>
{
  userID: 學號(String)
}
</pre>
      Failed:<br />
      400: Request body格式錯誤<br />
      401: 密碼錯誤
    </td>
    <td>Login</td>
  </tr>

  <tr>
    <td>DELETE</td>
    <td>/api/session</td>
    <td></td>
    <td>
      Success: 204
    </td>
    <td>Logout</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/courses</td>
    <td></td>
    <td>
      Success: 200<br />
<pre>
{
  type(String, 課程種類)：[
    {
      courseID: 課程 ID(String),
      name: 課程名稱(String),
    },
    ...
  ],
  ...
}
</pre>
      Failed:<br />
      403: 沒登入
    </td>
    <td>Get all courses</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/selections/:courseID</td>
    <td></td>
    <td>
      Success: 200<br />
      JSON Response:<br />
<pre>
{
  name: 課程名稱(String),
  type: 課程種類,
  description: 課程描述(String),
  selected(String, 選的選項照志願序順序): [選項名稱(String), ...],
  unselected(String, 沒選的選項無排序): [選項名稱(String), ...],
}
</pre>
      Failed:<br />
      403: 沒登入<br />
      404: 不合法的courseID
    </td>
    <td>Get course selection</td>
  </tr>

  <tr>
    <td>PUT</td>
    <td>/api/selections/:courseID</td>
    <td>
      type: <code>json</code><br />
      content:<br />
<pre>
(一條Array裡面都是選項名稱，照志願序排序)
[選項名稱(String)]
</pre>
    </td>
    <td>
      Success: 204<br />
      Failed:<br />
      403: 沒登入<br />
      404: 不合法的courseID<br />
      400: Request body 格式錯誤
    </td>
    <td>Update course selection</td>
  </tr>

</table>
