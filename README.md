# financial

coin trader

### BINANCE API 문서

Binance API 문서: https://binance-docs.github.io/apidocs/spot/en/#introduction

## Memo

1. IEX Cloud
   IEX Cloud는 제한적인 실시간 주식 데이터를 무료로 제공하는 서비스 중 하나입니다.
   무료 플랜에서는 미국 주식에 대한 제한된 실시간 데이터를 웹소켓을 통해 스트리밍할 수 있습니다.
   IEX Cloud는 월별 무료 호출 한도(플랜에 따라 다름)를 제공하며, 실시간 데이터 스트리밍이 가능한 웹소켓 API를 지원합니다.
   WebSocket Endpoint: wss://cloud-sse.iexapis.com/stable/stocksUS?token=YOUR_API_TOKEN
   무료로 제공하는 실시간 주식 데이터는 IEX 거래소의 거래 데이터를 기반으로 하며, 모든 미국 거래소의 데이터를 제공하지 않을 수 있습니다.
   IEX Cloud의 무료 한도:

무료 계정에서는 실시간 데이터에 제한이 있을 수 있으며, 대규모 실시간 데이터를 수신하려면 유료 플랜이 필요할 수 있습니다.
IEX Cloud 웹소켓 문서: https://iexcloud.io/docs/websockets

2. Alpaca Markets (모의 거래 기능 포함)
   Alpaca는 모의 주식 거래 기능을 제공하며, 무료로 실시간 주식 데이터를 제공하는 브로커 API 서비스입니다.
   웹소켓 API를 통해 실시간 주식 데이터를 스트리밍할 수 있으며, 기본 플랜에서는 제한된 무료 실시간 데이터를 받을 수 있습니다.
   주식 모의 거래(Paper Trading) 기능도 무료로 제공되므로, 주식 데이터를 활용한 거래 시스템을 테스트하거나 개발할 수 있습니다.
   WebSocket Endpoint: wss://stream.data.alpaca.markets/v2/iex
   무료 플랜에서는 IEX의 데이터에 기반한 실시간 주식 가격 정보를 제공하지만, 더 많은 데이터를 원한다면 유료 플랜을 고려해야 합니다.
   Alpaca 웹소켓 문서: https://alpaca.markets/docs/api-references/market-data-api/streaming/
