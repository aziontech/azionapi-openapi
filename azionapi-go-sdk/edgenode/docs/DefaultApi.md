# \DefaultApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AuthorizeEdgeNode**](DefaultApi.md#AuthorizeEdgeNode) | **Patch** /edge_nodes/authorize | Authorize edge-node
[**CreateEdgeNodeSvcs**](DefaultApi.md#CreateEdgeNodeSvcs) | **Post** /edge_nodes/{edgenodeId}/services | Create an edge-node Service association
[**DelEdgeNode**](DefaultApi.md#DelEdgeNode) | **Delete** /edge_nodes/{edgenodeId} | Delete edge-node by ID
[**DelEdgeNodeSvc**](DefaultApi.md#DelEdgeNodeSvc) | **Delete** /edge_nodes/{edgenodeId}/services/{bindId} | Delete an edge-node Service association
[**GetEdgeNode**](DefaultApi.md#GetEdgeNode) | **Get** /edge_nodes/{edgenodeId} | Return edge-node by ID
[**GetEdgeNodeGroups**](DefaultApi.md#GetEdgeNodeGroups) | **Get** /edge_nodes/groups | Return edge-node groups
[**GetEdgeNodeSvcDetail**](DefaultApi.md#GetEdgeNodeSvcDetail) | **Get** /edge_nodes/{edgenodeId}/services/{bindId} | Return edge-node Service association by ID
[**GetEdgeNodeSvcs**](DefaultApi.md#GetEdgeNodeSvcs) | **Get** /edge_nodes/{edgenodeId}/services | Return edge-node Services association
[**GetEdgeNodes**](DefaultApi.md#GetEdgeNodes) | **Get** /edge_nodes | Return edge-nodes
[**UpdateEdgeNode**](DefaultApi.md#UpdateEdgeNode) | **Patch** /edge_nodes/{edgenodeId} | Update edge-node
[**UpdateEdgeNodeSvcDetail**](DefaultApi.md#UpdateEdgeNodeSvcDetail) | **Patch** /edge_nodes/{edgenodeId}/services/{bindId} | Update edge-node Service association by ID



## AuthorizeEdgeNode

> AuthorizeEdgeNodesResponse AuthorizeEdgeNode(ctx).AuthorizeEdgeNodesRequest(authorizeEdgeNodesRequest).Execute()

Authorize edge-node

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorizeEdgeNodesRequest := *openapiclient.NewAuthorizeEdgeNodesRequest([]int64{int64(123)}) // AuthorizeEdgeNodesRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.AuthorizeEdgeNode(context.Background()).AuthorizeEdgeNodesRequest(authorizeEdgeNodesRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.AuthorizeEdgeNode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthorizeEdgeNode`: AuthorizeEdgeNodesResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.AuthorizeEdgeNode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAuthorizeEdgeNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorizeEdgeNodesRequest** | [**AuthorizeEdgeNodesRequest**](AuthorizeEdgeNodesRequest.md) |  | 

### Return type

[**AuthorizeEdgeNodesResponse**](AuthorizeEdgeNodesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateEdgeNodeSvcs

> ServiceBindDetailResponse CreateEdgeNodeSvcs(ctx, edgenodeId).ServiceBindRequest(serviceBindRequest).Execute()

Create an edge-node Service association

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 
    serviceBindRequest := *openapiclient.NewServiceBindRequest(int64(123), []openapiclient.Variable{*openapiclient.NewVariable("Name_example", "Value_example")}) // ServiceBindRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.CreateEdgeNodeSvcs(context.Background(), edgenodeId).ServiceBindRequest(serviceBindRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.CreateEdgeNodeSvcs``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateEdgeNodeSvcs`: ServiceBindDetailResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.CreateEdgeNodeSvcs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateEdgeNodeSvcsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **serviceBindRequest** | [**ServiceBindRequest**](ServiceBindRequest.md) |  | 

### Return type

[**ServiceBindDetailResponse**](ServiceBindDetailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DelEdgeNode

> DelEdgeNode(ctx, edgenodeId).Execute()

Delete edge-node by ID

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.DefaultApi.DelEdgeNode(context.Background(), edgenodeId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.DelEdgeNode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDelEdgeNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DelEdgeNodeSvc

> DelEdgeNodeSvc(ctx, edgenodeId, bindId).Execute()

Delete an edge-node Service association

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 
    bindId := int64(789) // int64 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.DefaultApi.DelEdgeNodeSvc(context.Background(), edgenodeId, bindId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.DelEdgeNodeSvc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 
**bindId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDelEdgeNodeSvcRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEdgeNode

> EdgeNodeDetailResponse GetEdgeNode(ctx, edgenodeId).Execute()

Return edge-node by ID

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetEdgeNode(context.Background(), edgenodeId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetEdgeNode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEdgeNode`: EdgeNodeDetailResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetEdgeNode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEdgeNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EdgeNodeDetailResponse**](EdgeNodeDetailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEdgeNodeGroups

> []NodeGroupResponse GetEdgeNodeGroups(ctx).Execute()

Return edge-node groups

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetEdgeNodeGroups(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetEdgeNodeGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEdgeNodeGroups`: []NodeGroupResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetEdgeNodeGroups`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetEdgeNodeGroupsRequest struct via the builder pattern


### Return type

[**[]NodeGroupResponse**](NodeGroupResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEdgeNodeSvcDetail

> ServiceBindDetailResponse GetEdgeNodeSvcDetail(ctx, edgenodeId, bindId).Execute()

Return edge-node Service association by ID

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 
    bindId := int64(789) // int64 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetEdgeNodeSvcDetail(context.Background(), edgenodeId, bindId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetEdgeNodeSvcDetail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEdgeNodeSvcDetail`: ServiceBindDetailResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetEdgeNodeSvcDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 
**bindId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEdgeNodeSvcDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ServiceBindDetailResponse**](ServiceBindDetailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEdgeNodeSvcs

> ServiceResponseWithTotal GetEdgeNodeSvcs(ctx, edgenodeId).IsBound(isBound).Filter(filter).OrderBy(orderBy).Sort(sort).Page(page).PageSize(pageSize).Execute()

Return edge-node Services association

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 
    isBound := true // bool |  (optional)
    filter := "filter_example" // string |  (optional)
    orderBy := "orderBy_example" // string |  (optional)
    sort := "sort_example" // string |  (optional)
    page := int64(789) // int64 |  (optional)
    pageSize := int64(789) // int64 |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetEdgeNodeSvcs(context.Background(), edgenodeId).IsBound(isBound).Filter(filter).OrderBy(orderBy).Sort(sort).Page(page).PageSize(pageSize).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetEdgeNodeSvcs``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEdgeNodeSvcs`: ServiceResponseWithTotal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetEdgeNodeSvcs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEdgeNodeSvcsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **isBound** | **bool** |  | 
 **filter** | **string** |  | 
 **orderBy** | **string** |  | 
 **sort** | **string** |  | 
 **page** | **int64** |  | 
 **pageSize** | **int64** |  | 

### Return type

[**ServiceResponseWithTotal**](ServiceResponseWithTotal.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEdgeNodes

> EdgeNodeResponseWithTotal GetEdgeNodes(ctx).Filter(filter).OrderBy(orderBy).Sort(sort).OnlyIds(onlyIds).PageSize(pageSize).Execute()

Return edge-nodes

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    filter := "filter_example" // string |  (optional)
    orderBy := "orderBy_example" // string |  (optional)
    sort := "sort_example" // string |  (optional)
    onlyIds := true // bool |  (optional)
    pageSize := int64(789) // int64 |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.GetEdgeNodes(context.Background()).Filter(filter).OrderBy(orderBy).Sort(sort).OnlyIds(onlyIds).PageSize(pageSize).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetEdgeNodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEdgeNodes`: EdgeNodeResponseWithTotal
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetEdgeNodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEdgeNodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string** |  | 
 **orderBy** | **string** |  | 
 **sort** | **string** |  | 
 **onlyIds** | **bool** |  | 
 **pageSize** | **int64** |  | 

### Return type

[**EdgeNodeResponseWithTotal**](EdgeNodeResponseWithTotal.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateEdgeNode

> UpdateEdgeNodeResponse UpdateEdgeNode(ctx, edgenodeId).Execute()

Update edge-node

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.UpdateEdgeNode(context.Background(), edgenodeId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.UpdateEdgeNode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEdgeNode`: UpdateEdgeNodeResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.UpdateEdgeNode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEdgeNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**UpdateEdgeNodeResponse**](UpdateEdgeNodeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateEdgeNodeSvcDetail

> ServiceBindDetailResponse UpdateEdgeNodeSvcDetail(ctx, edgenodeId, bindId).UpdateServiceBindRequest(updateServiceBindRequest).Execute()

Update edge-node Service association by ID

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    edgenodeId := int64(789) // int64 | 
    bindId := int64(789) // int64 | 
    updateServiceBindRequest := *openapiclient.NewUpdateServiceBindRequest([]openapiclient.Variable{*openapiclient.NewVariable("Name_example", "Value_example")}) // UpdateServiceBindRequest | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DefaultApi.UpdateEdgeNodeSvcDetail(context.Background(), edgenodeId, bindId).UpdateServiceBindRequest(updateServiceBindRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.UpdateEdgeNodeSvcDetail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateEdgeNodeSvcDetail`: ServiceBindDetailResponse
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.UpdateEdgeNodeSvcDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**edgenodeId** | **int64** |  | 
**bindId** | **int64** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEdgeNodeSvcDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateServiceBindRequest** | [**UpdateServiceBindRequest**](UpdateServiceBindRequest.md) |  | 

### Return type

[**ServiceBindDetailResponse**](ServiceBindDetailResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json; version=3
- **Accept**: application/json; version=3

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

