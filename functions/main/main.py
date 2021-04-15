import os

from azure import functions


def main(req: functions.HttpRequest) -> functions.HttpResponse:

    with open(os.getcwd() + '/main/index.html') as index_file:
        body = index_file.read()

    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    return functions.HttpResponse(
        body=body,
        status_code=200,
        headers=headers,
        mimetype='text/html'
    )
