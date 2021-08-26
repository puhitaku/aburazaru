// ==UserScript==
// @name         Rickroll Any Video/Image
// @version      1.0.0
// @namespace    https://github.com/puhitaku/aburazaru
// @description  Rickroll Any Video/Image
// @include      http://*/*
// @include      https://*/*
// ==/UserScript==

(function() {
  'use strict';

  let htmlToElement = html => {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  // Never Gonna Give You Up
  let rick = htmlToElement(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `)

  let rickpic = `data:image/jpeg;base64,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
00qXLpP+vdQJ5S7/AJ3blR7d+6C5bss/rrtvSMv/AIuPvIC0OyzfrF/yNl/1B/1TUCmO7wcw7zTE
6qA5b/qfmpnn5KotLb6cYsuJ4FRnmOW87Pf/AJiufaSzQZG0dgMi6sf+zVT2qn07m/6f83/g/p/S
b9D+WtAfSH/Kf/XPopw2XR2a9tgf7vUDnDWfXxj/ANI1tsWZkNBcSyNdYa5rx/nV+1bd/wBAfz3/
AH75rLy/p/4Tt/Of98QKZbNFr9rgTqByFYcQ30rGQ6SRzr8Cq1v0/wC5Tq+j8+/8EAsF61s3nNc1
21wLT4HzXc9Iv9fpuNZqCaw0z4t/R/8AfVw9vb6f0R9Pld7g/wBEx/o/zTPofR+iPofyVbgoJ4Tw
kEk5Bf/Z/+0TvFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQAAAAAAAAAAAAAAAAAAAAADhCSU0E
OgAAAAAA1wAAABAAAAABAAAAAAALcHJpbnRPdXRwdXQAAAAFAAAAAFBzdFNib29sAQAAAABJbnRl
ZW51bQAAAABJbnRlAAAAAEltZyAAAAAPcHJpbnRTaXh0ZWVuQml0Ym9vbAAAAAALcHJpbnRlck5h
bWVURVhUAAAAAQAAAAAAD3ByaW50UHJvb2ZTZXR1cE9iamMAAAAFaCFrY4otW5oAAAAAAApwcm9v
ZlNldHVwAAAAAQAAAABCbHRuZW51bQAAAAxidWlsdGluUHJvb2YAAAAJcHJvb2ZDTVlLADhCSU0E
OwAAAAACLQAAABAAAAABAAAAAAAScHJpbnRPdXRwdXRPcHRpb25zAAAAFwAAAABDcHRuYm9vbAAA
AAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExi
bHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2Jq
YwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAA
AAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50
RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAWAAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEA
AAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRv
cCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJp
bnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcA
AAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D
7QAAAAAAEABgAAAAAQACAGAAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAA
AAAABAAAAB44QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAA
CgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAA
AAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP//////
//////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA////////
/////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAA
AAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA3sAAAAGAAAAAAAA
AAAAAAF/AAACqQAAACMAUgBpAGMAawAtAEEAcwB0AGwAZQB5AC0ATgBlAHYAZQByAC0ARwBvAG4A
bgBhAC0ARwBpAHYAZQAtAFkAbwB1AC0AVQBwAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAA
AAAAAAKpAAABfwAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAA
bnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAA
AAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAABfwAAAABSZ2h0bG9uZwAAAqkAAAAGc2xpY2Vz
VmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3Jv
dXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0
ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAA
AAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAA
AX8AAAAAUmdodGxvbmcAAAKpAAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAA
TXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wB
AAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGln
bgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1
bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9w
T3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcA
AAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQR
AAAAAAABAQA4QklNBBQAAAAAAAQAAAABOEJJTQQMAAAAAAqxAAAAAQAAAKAAAABaAAAB4AAAqMAA
AAqVABgAAf/Y/+0ADEFkb2JlX0NNAAH/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsK
CxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0O
DRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM
DAz/wAARCABaAKADASIAAhEBAxEB/90ABAAK/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcI
CQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCES
MQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl
8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQE
AwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKD
ByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dn
d4eXp7fH/9oADAMBAAIRAxEAPwDoNoSDQpEaJDRXitCnwBtA45UWM3Oj71JSqmYiUCm2Oz9LH4fJ
TDSQSIElRJPqk8R/cpOLGt1GvZNKUV23iZPkhiiQD4p41RQ0RGrvCJTSuappjcdJHZCIhXml0aNg
E99FXyGBpHE9wE0pDQyrrqmuNbNGgw494Gun8lctmUZN15sYxzwdZAElbHWSbM6lkeyphcTHJJ19
37qr1ZDWWS4locYkgx/nQqJBnMknQEgNwUICI6gEuS2vKawzU5gJmQ0wPuW99W8p/qOxnmQ8FwEc
PHOv9RWK3zIDpjsPNBwaWjrheNIrc+O26Nv/AH5SRgYkEHqxyHpLux5KLWhziETQjQ9kOvV581aa
5YxBhSCTzroIhN4JUgs0lEFPuSpYX//Q6NzdIShPrKmxm468dyr1rQjDSTok1xa78qsNaBpwPFBt
BDzPjyglhuhxcPxUDucfElTRK27WzxPJ8AgUhA5pbE/gp1PeSRM6aSiWNBadsf7VWkgyOyYVzJ1o
aIn3Rx4SqztdAJKme6mKobrye8phXB571q76ci3IrByQQ0ESIHHE/mrPt9ANgN2kn3O1Mrb6xjU1
kW1tDbLDL4nUadljONrbmlr2NH8sE6/Ld/1Kq8NEjxbnEJniiOEH9FtjGpv9O5j4cxu0kRGn7wK0
Om49bTfkA7rSRWZ7NADv/BFUxhk3BjbWtFrtAGGRHnotnGxxj1bOXTucfElSwANabMWUiiFmPLT4
juEmO2ukeala2DoIBQ1NbAWRJe7XkpREgqdI1JAmEUsa4acorWvCXdOQQYPITILJP//R6VrS7hFa
23s4D5IDXEDQwjy5wAGh4lXLWqLbYkvEFCt3g7XHdCla8xAOvdAcUCUrgv5aJhOTdxB+5TqDgyfE
+PgpEvknTTz/ANiaSuDXLrvA/ch2OcT7hB+EKyd0DQfeql7nF7p8eyaSuCwe/XaJ84SL7iYI+UIF
2fj4dRdc8CNYlYd31qN17a6Rtrc7bPxUc8gC4RPk6XV2XWtqaxjnuBMhrSTEfyVl1jJZbtDII+kH
+3T+0rfUy5uSwBx+gGgA9hp/31UbHllrdSS5ogaklREWbZ4S1Eew3bwyLMcOyWtbY6lpe6s6AtA9
7Wu/e2rRw+o4udWLMexpnmt2j2n91zP/ACKzb63Y/Scu+8hr7KixrfAO9rWf13uXKVZVmPZvZwRD
h4hPJ4QPFjySBlpttb6MXO4c37wUNcjV9YMuho9Ox22NNZH3O3K/j/W5hH61WXnxrEH7vooxyArC
PF6NpfGjRH5VMPs52c+aq42VXkY7MjHduqsEiRBEaOa4fmvarLbCQD4KVYVO3u1LNfFD1GhGvdFd
YWw7knlBJkz4pLZP/9Lo+NPBO60EfyjyfBM9oGvYqHwCtWtXnwUSZRQ0tZu7gSUECXAeJQtIbA3A
NGmg/KmLnQTpqmMAkwNFA/RHtGvmm2uDJznSBA+9YnXs2zFwLb69HlzWj+0df+itV0T9Eaecrnvr
UHHpbY49Zu77nx/0kyR0PkvDy+VlXZB3WvLtdB2Qq3bXtJ4BB+4qJOkeCSq3aDIl6n7TT1XLdZjC
2waghoYCADv3bLLGv27UTFsxm3AmjIL/AKIsdSTAH7zavUaz+yqP1UcRbYQCdo/kjkt/P/n/AP0U
mvoJsefs5+kTuOHPf/SYd29SgmgVwK31l6j6zq8aon0WS5wLHsJcPbu/SNY17G/mbVgOKudQ0cBx
DdABcI1/czPo/wDW1RmUyciTZWlJ7g1o1DDMaaHxhyINrT8FcY51nSHMaC70AXNHg5rvc4f9bemH
R8oYRynEMI1Fb9HOb3c3+V/wSUTS6WM+mvVxDid36p278PIq1hljXDy3iP8Avi3GPLdOxWX9WMem
rpTbWHe7IcX2O41afTaz+zC0y0g/kVmOy3okteIAjXmUNMiNaS35orS//9PorD+byR9yetsDdMdt
UGSiVPcTt0iDr4KwSgMrd7Whumvh5IVZIfJB07BPc8l2vYKDX7ZMHXuhaUjrQBpOviFB1wMDX7kx
vEAEH7vBR9Zs9/uTSuCnPJB0P3LG+ssfsW6f3q4+O5a5dIPmsv6x17+jZA/d2P8AucE2WxXDd4g6
JknH3EBMVVWl0+ivsa670yWua3dLWbjP5vvkO/61/hUY01t9zqWMPcuxcio/52O9yo9LI9W6QD+i
PIJ7/wAj3K2Laq+HV1/1bcqj/qw9icNl0dmn1FzDG1zXQOGvudA/q5Y9n9hUJWplusyG7RvsHIP2
oXj47Nu9ZJkaHshIrZbu30ch1O0OglzvhqG6f2la6uP1Vjnyx8hpky14j8391VujZuDtrZbWG3Vg
HjR+36P9rajdZfVZRW1riJeXNYTr8W/1UY02brFob0d36u52PkYLcetoqtxQGvrHBB/wzf67vp/y
1qEg6H5LhejZhwuoVWvM1zssP8h2jv8AN+mu7HkrMTo1wbDAhEDgI5USk0xp2Tlhf//U3T7Wgnkp
Me0O9wlTd9B3HblAU5Uu8y8kcdkb6LQPggd0R3P53dNKly6T/r3UCeUu/wCd25Ue3fuguW7LP667
b0jL/wCLj7yAtDss36xf8jZf9Qf9U1Apju8HMO80xOqgOW/6n5qZ5+SqLS2+nGLLieBUZ5jlvOz3
/wCYrn2ks0GRtHYDIurH/s1U9qp9O5v+n/N/4P6f0m/Q/lrQH0h/yn/1z6KcNl0dmvbYH+71A5w1
n18Y/wDSNbbFmZDQXEsjXWGua8f51ftW3f8AQH89/wB++ay8v6f+E7fzn/fECmWzRa/a4E6gchWH
EN9KxkOkkc6/Aqtb9P8AuU6vo/Pv/BALBetbN5zXNdtcC0+B813PSL/X6bjWagmsNM+Lf0f/AH1c
Pb2+n9EfT5Xe4P8ARMf6P80z6H0foj6H8lW4KCeE8JBJOQX/2QA4QklNBCEAAAAAAFcAAAABAQAA
AA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAAUAEEAZABvAGIAZQAgAFAAaABvAHQA
bwBzAGgAbwBwACAAMgAwADIAMQAAAAEAOEJJTQQGAAAAAAAH//4BAQABAQD/4Q5VaHR0cDovL25z
LmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlI
enJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4Onht
cHRrPSJBZG9iZSBYTVAgQ29yZSA3LjAtYzAwMCA3OS5kYWJhY2JiLCAyMDIxLzA0LzE0LTAwOjM5
OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkv
MDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxu
czp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVy
bC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUu
Y29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAv
MS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9S
ZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuNSAoTWFj
aW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDgtMjZUMTk6NTU6MzgrMDk6MDAiIHhtcDpN
b2RpZnlEYXRlPSIyMDIxLTA4LTI2VDE5OjU2OjQ4KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIy
MDIxLTA4LTI2VDE5OjU2OjQ4KzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hv
cDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIg
eG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjYjQ3NTMyOS01MDFiLTQ5YWQtYWZlOS01ZDA4Nzk4
OWUyNTMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MjE4NTcxOC1h
MGRlLTM0NGEtOTg1ZS1kNjFiMTMzZmUyMjgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1w
LmRpZDo3YjNjYWEzZi0wYzY4LTQyMTAtYmYyNy01ZjBhMjdmNzE3NjMiPiA8eG1wTU06SGlzdG9y
eT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5j
ZUlEPSJ4bXAuaWlkOjdiM2NhYTNmLTBjNjgtNDIxMC1iZjI3LTVmMGEyN2Y3MTc2MyIgc3RFdnQ6
d2hlbj0iMjAyMS0wOC0yNlQxOTo1NTozOCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRv
YmUgUGhvdG9zaG9wIDIyLjUgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNv
bnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvanBlZyIv
PiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6
Y2I0NzUzMjktNTAxYi00OWFkLWFmZTktNWQwODc5ODllMjUzIiBzdEV2dDp3aGVuPSIyMDIxLTA4
LTI2VDE5OjU2OjQ4KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3Ag
MjIuNSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06
SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg
ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0
IGVuZD0idyI/Pv/uACFBZG9iZQBkgAAAAAEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAAUEREaEhop
GBgpMycgJzMnHBwcHCciFxcXFxciEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM
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
GLv/2Q==`

  let replace = () => {
    let image = document.querySelectorAll('img');
    if (image !== null) {
      image.forEach(e => {
        // Never gonna replace Rick
        if (e.getAttribute('rickrolled') === 'yes') {
          return;
        }

        // Never gonna let img be different size
        let width = e.offsetWidth;
        let height = e.offsetHeight;
        let style = e.getAttribute('style') || '';

        e.setAttribute('src', rickpic);
        e.setAttribute('rickrolled', 'yes');
        e.setAttribute('style', `${style}; width: ${width}px; height: ${height}px`);
      })
    }

    // YouTube never gonna let you play with their videos... Cry... Goodbye...
    if (document.location.host == "www.youtube.com") {
      return;
    }

    let video = document.querySelectorAll('video');
    let iframe = document.querySelectorAll('iframe');

    if (video !== null) {
      video.forEach(e => {
        e.replaceWith(rick);
      })
    }

    if (iframe !== null) {
      iframe.forEach(e => {
        // Never gonna let Rick be trapped into an infinite reload hell
        let src = e.getAttribute('src') || e.getAttribute('data-src');
        if (src !== null && src.startsWith('https://www.youtube.com/embed') && !src.endsWith('dQw4w9WgXcQ')) {
          e.replaceWith(rick);
        }
      })
    }
  };

  // Never gonna let elements run from Rickrolling
  setInterval(replace, 500);
})();

