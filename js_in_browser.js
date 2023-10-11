await fetch("https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,bn;q=0.8",
    "bnc-location": "BINANCE",
    "bnc-uuid": "89b1f1cd-6352-4f99-a8ac-876839b9e06f",
    "clienttype": "web",
    "content-type": "application/json",
    "csrftoken": "d05896696641246500ad675320f35fbc",
    "device-info": "eyJzY3JlZW5fcmVzb2x1dGlvbiI6IjkwMCwxNjAwIiwiYXZhaWxhYmxlX3NjcmVlbl9yZXNvbHV0aW9uIjoiODYwLDE2MDAiLCJzeXN0ZW1fdmVyc2lvbiI6IldpbmRvd3MgMTAiLCJicmFuZF9tb2RlbCI6InVua25vd24iLCJzeXN0ZW1fbGFuZyI6ImVuLVVTIiwidGltZXpvbmUiOiJHTVQrMDY6MDAiLCJ0aW1lem9uZU9mZnNldCI6LTM2MCwidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTcuMC4wLjAgU2FmYXJpLzUzNy4zNiIsImxpc3RfcGx1Z2luIjoiUERGIFZpZXdlcixDaHJvbWUgUERGIFZpZXdlcixDaHJvbWl1bSBQREYgVmlld2VyLE1pY3Jvc29mdCBFZGdlIFBERiBWaWV3ZXIsV2ViS2l0IGJ1aWx0LWluIFBERiIsImNhbnZhc19jb2RlIjoiMzhhMDNiZjIiLCJ3ZWJnbF92ZW5kb3IiOiJHb29nbGUgSW5jLiAoSW50ZWwpIiwid2ViZ2xfcmVuZGVyZXIiOiJBTkdMRSAoSW50ZWwsIEludGVsKFIpIEhEIEdyYXBoaWNzIERpcmVjdDNEOUV4IHZzXzNfMCBwc18zXzAsIGlnZHVtZDY0LmRsbCkiLCJhdWRpbyI6IjEyNC4wNDM0NzUyNzUxNjA3NCIsInBsYXRmb3JtIjoiV2luMzIiLCJ3ZWJfdGltZXpvbmUiOiJBc2lhL0RoYWthIiwiZGV2aWNlX25hbWUiOiJDaHJvbWUgVjExNy4wLjAuMCAoV2luZG93cykiLCJmaW5nZXJwcmludCI6ImVjN2YzOGQ4YjYxZjE5ZjE5ZGVhZGQ5ZWRkNjhjNTlkIiwiZGV2aWNlX2lkIjoiIiwicmVsYXRlZF9kZXZpY2VfaWRzIjoiIn0=",
    "fvideo-id": "337adef8dff1a23e9ff4687ee8760278855a8685",
    "fvideo-token": "mCiS4Fpp1F6jAtpHb6FAPJogugArSMeRAeaoG7Xnzuh4Zh0UYx4Oq5rkOW7qhH0ryiIaKP0WN56cXifwOrJB8t73J8zTobHWA/0l1vLbO279XUhzKJsZV3D+YJW3wYw0cN1to/G1q/jBPCBsArtnG6FbjK3gbqcwji6cCXwFtN2n/2CI2IBKLb/lutsiC2LN4=5f",
    "lang": "en",
    "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-passthrough-token": "",
    "x-trace-id": "56dd9ed9-0cd6-4c33-a344-33a1672fd6b9",
    "x-ui-request-trace": "56dd9ed9-0cd6-4c33-a344-33a1672fd6b9"
  },
  "referrer": "https://www.binance.com/en/my/dashboard",
  "referrerPolicy": "origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then(response => {
      if (response.ok) {
        response.json().then(data => {
            // console.log('Data saved successfully!');
            data.data.forEach((item) => {
              if (item.symbol === 'BTCUSDT') {
                console.log(item);

              }
            });
        });

      } else {
        console.error('Error saving data:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });
