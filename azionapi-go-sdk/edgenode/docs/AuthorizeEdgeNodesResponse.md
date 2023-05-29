# AuthorizeEdgeNodesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Authorized** | **[]int64** |  | 
**Errors** | [**[]UnauthorizedEdgeNodeInfo**](UnauthorizedEdgeNodeInfo.md) |  | 

## Methods

### NewAuthorizeEdgeNodesResponse

`func NewAuthorizeEdgeNodesResponse(authorized []int64, errors []UnauthorizedEdgeNodeInfo, ) *AuthorizeEdgeNodesResponse`

NewAuthorizeEdgeNodesResponse instantiates a new AuthorizeEdgeNodesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizeEdgeNodesResponseWithDefaults

`func NewAuthorizeEdgeNodesResponseWithDefaults() *AuthorizeEdgeNodesResponse`

NewAuthorizeEdgeNodesResponseWithDefaults instantiates a new AuthorizeEdgeNodesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorized

`func (o *AuthorizeEdgeNodesResponse) GetAuthorized() []int64`

GetAuthorized returns the Authorized field if non-nil, zero value otherwise.

### GetAuthorizedOk

`func (o *AuthorizeEdgeNodesResponse) GetAuthorizedOk() (*[]int64, bool)`

GetAuthorizedOk returns a tuple with the Authorized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorized

`func (o *AuthorizeEdgeNodesResponse) SetAuthorized(v []int64)`

SetAuthorized sets Authorized field to given value.


### GetErrors

`func (o *AuthorizeEdgeNodesResponse) GetErrors() []UnauthorizedEdgeNodeInfo`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AuthorizeEdgeNodesResponse) GetErrorsOk() (*[]UnauthorizedEdgeNodeInfo, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AuthorizeEdgeNodesResponse) SetErrors(v []UnauthorizedEdgeNodeInfo)`

SetErrors sets Errors field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


