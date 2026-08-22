# `apiIntegrationGoogleCloudApiGateway` Submodule <a name="`apiIntegrationGoogleCloudApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGoogleCloudApiGateway <a name="ApiIntegrationGoogleCloudApiGateway" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway snowflake_api_integration_google_cloud_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.NewApiIntegrationGoogleCloudApiGateway(scope Construct, id *string, config ApiIntegrationGoogleCloudApiGatewayConfig) ApiIntegrationGoogleCloudApiGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig">ApiIntegrationGoogleCloudApiGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig">ApiIntegrationGoogleCloudApiGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts"></a>

```go
func PutTimeouts(value ApiIntegrationGoogleCloudApiGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes"></a>

```go
func ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGateway_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiIntegrationGoogleCloudApiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiIntegrationGoogleCloudApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGoogleCloudApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput">GoogleAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience">GoogleAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput"></a>

```go
func DescribeOutput() ApiIntegrationGoogleCloudApiGatewayDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput"></a>

```go
func ShowOutput() ApiIntegrationGoogleCloudApiGatewayShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts"></a>

```go
func Timeouts() ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput"></a>

```go
func ApiAllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput"></a>

```go
func ApiBlockedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GoogleAudienceInput`<sup>Optional</sup> <a name="GoogleAudienceInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput"></a>

```go
func GoogleAudienceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes"></a>

```go
func ApiAllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes"></a>

```go
func ApiBlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience"></a>

```go
func GoogleAudience() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGoogleCloudApiGatewayConfig <a name="ApiIntegrationGoogleCloudApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

&apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiAllowedPrefixes: *[]*string,
	Enabled: interface{},
	GoogleAudience: *string,
	Name: *string,
	ApiBlockedPrefixes: *[]*string,
	Comment: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience">GoogleAudience</a></code> | <code>*string</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes"></a>

```go
ApiAllowedPrefixes *[]*string
```

- *Type:* *[]*string

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience"></a>

```go
GoogleAudience *string
```

- *Type:* *string

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes"></a>

```go
ApiBlockedPrefixes *[]*string
```

- *Type:* *[]*string

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts"></a>

```go
Timeouts ApiIntegrationGoogleCloudApiGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

### ApiIntegrationGoogleCloudApiGatewayDescribeOutput <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

&apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput {

}
```


### ApiIntegrationGoogleCloudApiGatewayShowOutput <a name="ApiIntegrationGoogleCloudApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

&apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGatewayShowOutput {

}
```


### ApiIntegrationGoogleCloudApiGatewayTimeouts <a name="ApiIntegrationGoogleCloudApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

&apiintegrationgooglecloudapigateway.ApiIntegrationGoogleCloudApiGatewayTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGoogleCloudApiGatewayDescribeOutputList <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.NewApiIntegrationGoogleCloudApiGatewayDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationGoogleCloudApiGatewayDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.NewApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount">GoogleApiServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience">GoogleAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```go
func BlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GoogleApiServiceAccount`<sup>Required</sup> <a name="GoogleApiServiceAccount" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```go
func GoogleApiServiceAccount() *string
```

- *Type:* *string

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience"></a>

```go
func GoogleAudience() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationGoogleCloudApiGatewayDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputList <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.NewApiIntegrationGoogleCloudApiGatewayShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationGoogleCloudApiGatewayShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.NewApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationGoogleCloudApiGatewayShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgooglecloudapigateway"

apiintegrationgooglecloudapigateway.NewApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



