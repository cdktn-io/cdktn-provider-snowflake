# `catalogIntegrationIcebergRest` Submodule <a name="`catalogIntegrationIcebergRest` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationIcebergRest <a name="CatalogIntegrationIcebergRest" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest snowflake_catalog_integration_iceberg_rest}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRest(scope Construct, id *string, config CatalogIntegrationIcebergRestConfig) CatalogIntegrationIcebergRest
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig">CatalogIntegrationIcebergRestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig">CatalogIntegrationIcebergRestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication">PutBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication">PutOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig">PutRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication">PutSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetBearerRestAuthentication">ResetBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetCatalogNamespace">ResetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOauthRestAuthentication">ResetOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetRefreshIntervalSeconds">ResetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetSigv4RestAuthentication">ResetSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBearerRestAuthentication` <a name="PutBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication"></a>

```go
func PutBearerRestAuthentication(value CatalogIntegrationIcebergRestBearerRestAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---

##### `PutOauthRestAuthentication` <a name="PutOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication"></a>

```go
func PutOauthRestAuthentication(value CatalogIntegrationIcebergRestOauthRestAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---

##### `PutRestConfig` <a name="PutRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig"></a>

```go
func PutRestConfig(value CatalogIntegrationIcebergRestRestConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---

##### `PutSigv4RestAuthentication` <a name="PutSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication"></a>

```go
func PutSigv4RestAuthentication(value CatalogIntegrationIcebergRestSigv4RestAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts"></a>

```go
func PutTimeouts(value CatalogIntegrationIcebergRestTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

---

##### `ResetBearerRestAuthentication` <a name="ResetBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetBearerRestAuthentication"></a>

```go
func ResetBearerRestAuthentication()
```

##### `ResetCatalogNamespace` <a name="ResetCatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetCatalogNamespace"></a>

```go
func ResetCatalogNamespace()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetId"></a>

```go
func ResetId()
```

##### `ResetOauthRestAuthentication` <a name="ResetOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOauthRestAuthentication"></a>

```go
func ResetOauthRestAuthentication()
```

##### `ResetRefreshIntervalSeconds` <a name="ResetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetRefreshIntervalSeconds"></a>

```go
func ResetRefreshIntervalSeconds()
```

##### `ResetSigv4RestAuthentication` <a name="ResetSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetSigv4RestAuthentication"></a>

```go
func ResetSigv4RestAuthentication()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.CatalogIntegrationIcebergRest_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.CatalogIntegrationIcebergRest_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.CatalogIntegrationIcebergRest_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.CatalogIntegrationIcebergRest_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CatalogIntegrationIcebergRest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CatalogIntegrationIcebergRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationIcebergRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthentication">BearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference">CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList">CatalogIntegrationIcebergRestDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthentication">OauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference">CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference">CatalogIntegrationIcebergRestRestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList">CatalogIntegrationIcebergRestShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthentication">Sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference">CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference">CatalogIntegrationIcebergRestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthenticationInput">BearerRestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespaceInput">CatalogNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthenticationInput">OauthRestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSecondsInput">RefreshIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfigInput">RestConfigInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthenticationInput">Sigv4RestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BearerRestAuthentication`<sup>Required</sup> <a name="BearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthentication"></a>

```go
func BearerRestAuthentication() CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference">CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.describeOutput"></a>

```go
func DescribeOutput() CatalogIntegrationIcebergRestDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList">CatalogIntegrationIcebergRestDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `OauthRestAuthentication`<sup>Required</sup> <a name="OauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthentication"></a>

```go
func OauthRestAuthentication() CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference">CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference</a>

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfig"></a>

```go
func RestConfig() CatalogIntegrationIcebergRestRestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference">CatalogIntegrationIcebergRestRestConfigOutputReference</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.showOutput"></a>

```go
func ShowOutput() CatalogIntegrationIcebergRestShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList">CatalogIntegrationIcebergRestShowOutputList</a>

---

##### `Sigv4RestAuthentication`<sup>Required</sup> <a name="Sigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthentication"></a>

```go
func Sigv4RestAuthentication() CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference">CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeouts"></a>

```go
func Timeouts() CatalogIntegrationIcebergRestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference">CatalogIntegrationIcebergRestTimeoutsOutputReference</a>

---

##### `BearerRestAuthenticationInput`<sup>Optional</sup> <a name="BearerRestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthenticationInput"></a>

```go
func BearerRestAuthenticationInput() CatalogIntegrationIcebergRestBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---

##### `CatalogNamespaceInput`<sup>Optional</sup> <a name="CatalogNamespaceInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespaceInput"></a>

```go
func CatalogNamespaceInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthRestAuthenticationInput`<sup>Optional</sup> <a name="OauthRestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthenticationInput"></a>

```go
func OauthRestAuthenticationInput() CatalogIntegrationIcebergRestOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---

##### `RefreshIntervalSecondsInput`<sup>Optional</sup> <a name="RefreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSecondsInput"></a>

```go
func RefreshIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `RestConfigInput`<sup>Optional</sup> <a name="RestConfigInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfigInput"></a>

```go
func RestConfigInput() CatalogIntegrationIcebergRestRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---

##### `Sigv4RestAuthenticationInput`<sup>Optional</sup> <a name="Sigv4RestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthenticationInput"></a>

```go
func Sigv4RestAuthenticationInput() CatalogIntegrationIcebergRestSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationIcebergRestBearerRestAuthentication <a name="CatalogIntegrationIcebergRestBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestBearerRestAuthentication {
	BearerToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.property.bearerToken">BearerToken</a></code> | <code>*string</code> | The bearer token for the identity provider. |

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.property.bearerToken"></a>

```go
BearerToken *string
```

- *Type:* *string

The bearer token for the identity provider.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_token CatalogIntegrationIcebergRest#bearer_token}

---

### CatalogIntegrationIcebergRestConfig <a name="CatalogIntegrationIcebergRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	RestConfig: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig,
	BearerRestAuthentication: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication,
	CatalogNamespace: *string,
	Comment: *string,
	Id: *string,
	OauthRestAuthentication: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication,
	RefreshIntervalSeconds: *f64,
	Sigv4RestAuthentication: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.bearerRestAuthentication">BearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | bearer_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | Specifies the default namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.comment">Comment</a></code> | <code>*string</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.oauthRestAuthentication">OauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | oauth_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.sigv4RestAuthentication">Sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | sigv4_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#enabled CatalogIntegrationIcebergRest#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#name CatalogIntegrationIcebergRest#name}

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.restConfig"></a>

```go
RestConfig CatalogIntegrationIcebergRestRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#rest_config CatalogIntegrationIcebergRest#rest_config}

---

##### `BearerRestAuthentication`<sup>Optional</sup> <a name="BearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.bearerRestAuthentication"></a>

```go
BearerRestAuthentication CatalogIntegrationIcebergRestBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

bearer_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_rest_authentication CatalogIntegrationIcebergRest#bearer_rest_authentication}

---

##### `CatalogNamespace`<sup>Optional</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.catalogNamespace"></a>

```go
CatalogNamespace *string
```

- *Type:* *string

Specifies the default namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_namespace CatalogIntegrationIcebergRest#catalog_namespace}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#comment CatalogIntegrationIcebergRest#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthRestAuthentication`<sup>Optional</sup> <a name="OauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.oauthRestAuthentication"></a>

```go
OauthRestAuthentication CatalogIntegrationIcebergRestOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

oauth_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_rest_authentication CatalogIntegrationIcebergRest#oauth_rest_authentication}

---

##### `RefreshIntervalSeconds`<sup>Optional</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.refreshIntervalSeconds"></a>

```go
RefreshIntervalSeconds *f64
```

- *Type:* *f64

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#refresh_interval_seconds CatalogIntegrationIcebergRest#refresh_interval_seconds}

---

##### `Sigv4RestAuthentication`<sup>Optional</sup> <a name="Sigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.sigv4RestAuthentication"></a>

```go
Sigv4RestAuthentication CatalogIntegrationIcebergRestSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

sigv4_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_rest_authentication CatalogIntegrationIcebergRest#sigv4_rest_authentication}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.timeouts"></a>

```go
Timeouts CatalogIntegrationIcebergRestTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#timeouts CatalogIntegrationIcebergRest#timeouts}

---

### CatalogIntegrationIcebergRestDescribeOutput <a name="CatalogIntegrationIcebergRestDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestDescribeOutput {

}
```


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication {

}
```


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication {

}
```


### CatalogIntegrationIcebergRestDescribeOutputRestConfig <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestDescribeOutputRestConfig {

}
```


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication {

}
```


### CatalogIntegrationIcebergRestOauthRestAuthentication <a name="CatalogIntegrationIcebergRestOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestOauthRestAuthentication {
	OauthAllowedScopes: *[]*string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	OauthTokenUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | Specifies one or more scopes for the OAuth token. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Specifies the client ID of the OAuth2 credential. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Specifies the secret of the OAuth2 credential. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthTokenUri">OauthTokenUri</a></code> | <code>*string</code> | Specifies URL for the third-party identity provider. |

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthAllowedScopes"></a>

```go
OauthAllowedScopes *[]*string
```

- *Type:* *[]*string

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_allowed_scopes CatalogIntegrationIcebergRest#oauth_allowed_scopes}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Specifies the client ID of the OAuth2 credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_id CatalogIntegrationIcebergRest#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Specifies the secret of the OAuth2 credential.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_secret CatalogIntegrationIcebergRest#oauth_client_secret}

---

##### `OauthTokenUri`<sup>Optional</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthTokenUri"></a>

```go
OauthTokenUri *string
```

- *Type:* *string

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_token_uri CatalogIntegrationIcebergRest#oauth_token_uri}

---

### CatalogIntegrationIcebergRestRestConfig <a name="CatalogIntegrationIcebergRestRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestRestConfig {
	CatalogUri: *string,
	AccessDelegationMode: *string,
	CatalogApiType: *string,
	CatalogName: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogUri">CatalogUri</a></code> | <code>*string</code> | Specifies the endpoint URL for the catalog REST API. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>*string</code> | Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogApiType">CatalogApiType</a></code> | <code>*string</code> | Specifies the connection type for the catalog API. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Specifies the catalog or identifier to request from your remote catalog service. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Specifies an optional prefix appended to all API routes. |

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogUri"></a>

```go
CatalogUri *string
```

- *Type:* *string

Specifies the endpoint URL for the catalog REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_uri CatalogIntegrationIcebergRest#catalog_uri}

---

##### `AccessDelegationMode`<sup>Optional</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.accessDelegationMode"></a>

```go
AccessDelegationMode *string
```

- *Type:* *string

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#access_delegation_mode CatalogIntegrationIcebergRest#access_delegation_mode}

---

##### `CatalogApiType`<sup>Optional</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogApiType"></a>

```go
CatalogApiType *string
```

- *Type:* *string

Specifies the connection type for the catalog API.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_api_type CatalogIntegrationIcebergRest#catalog_api_type}

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Specifies the catalog or identifier to request from your remote catalog service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_name CatalogIntegrationIcebergRest#catalog_name}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Specifies an optional prefix appended to all API routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#prefix CatalogIntegrationIcebergRest#prefix}

---

### CatalogIntegrationIcebergRestShowOutput <a name="CatalogIntegrationIcebergRestShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestShowOutput {

}
```


### CatalogIntegrationIcebergRestSigv4RestAuthentication <a name="CatalogIntegrationIcebergRestSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestSigv4RestAuthentication {
	Sigv4IamRole: *string,
	Sigv4ExternalId: *string,
	Sigv4SigningRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4IamRole">Sigv4IamRole</a></code> | <code>*string</code> | Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4ExternalId">Sigv4ExternalId</a></code> | <code>*string</code> | Specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4SigningRegion">Sigv4SigningRegion</a></code> | <code>*string</code> | Specifies the AWS Region associated with your API in API Gateway. |

---

##### `Sigv4IamRole`<sup>Required</sup> <a name="Sigv4IamRole" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4IamRole"></a>

```go
Sigv4IamRole *string
```

- *Type:* *string

Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_iam_role CatalogIntegrationIcebergRest#sigv4_iam_role}

---

##### `Sigv4ExternalId`<sup>Optional</sup> <a name="Sigv4ExternalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4ExternalId"></a>

```go
Sigv4ExternalId *string
```

- *Type:* *string

Specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

If you don’t specify this parameter, Snowflake automatically generates a unique external ID when you create a catalog integration. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_external_id CatalogIntegrationIcebergRest#sigv4_external_id}

---

##### `Sigv4SigningRegion`<sup>Optional</sup> <a name="Sigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4SigningRegion"></a>

```go
Sigv4SigningRegion *string
```

- *Type:* *string

Specifies the AWS Region associated with your API in API Gateway.

If you don’t specify this parameter, Snowflake uses the region in which your Snowflake account is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_signing_region CatalogIntegrationIcebergRest#sigv4_signing_region}

---

### CatalogIntegrationIcebergRestTimeouts <a name="CatalogIntegrationIcebergRestTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

&catalogintegrationicebergrest.CatalogIntegrationIcebergRestTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerTokenInput">BearerTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerToken">BearerToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BearerTokenInput`<sup>Optional</sup> <a name="BearerTokenInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerTokenInput"></a>

```go
func BearerTokenInput() *string
```

- *Type:* *string

---

##### `BearerToken`<sup>Required</sup> <a name="BearerToken" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerToken"></a>

```go
func BearerToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get"></a>

```go
func Get(index *f64) CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputList <a name="CatalogIntegrationIcebergRestDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationIcebergRestDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationIcebergRestDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get"></a>

```go
func Get(index *f64) CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri">OauthTokenUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthTokenUri`<sup>Required</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```go
func OauthTokenUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationIcebergRestDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.bearerRestAuthentication">BearerRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogSource">CatalogSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.oauthRestAuthentication">OauthRestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList">CatalogIntegrationIcebergRestDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.sigv4RestAuthentication">Sigv4RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput">CatalogIntegrationIcebergRestDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BearerRestAuthentication`<sup>Required</sup> <a name="BearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.bearerRestAuthentication"></a>

```go
func BearerRestAuthentication() CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList</a>

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `CatalogSource`<sup>Required</sup> <a name="CatalogSource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogSource"></a>

```go
func CatalogSource() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OauthRestAuthentication`<sup>Required</sup> <a name="OauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.oauthRestAuthentication"></a>

```go
func OauthRestAuthentication() CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList</a>

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.restConfig"></a>

```go
func RestConfig() CatalogIntegrationIcebergRestDescribeOutputRestConfigList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList">CatalogIntegrationIcebergRestDescribeOutputRestConfigList</a>

---

##### `Sigv4RestAuthentication`<sup>Required</sup> <a name="Sigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.sigv4RestAuthentication"></a>

```go
func Sigv4RestAuthentication() CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList</a>

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput">CatalogIntegrationIcebergRestDescribeOutput</a>

---


### CatalogIntegrationIcebergRestDescribeOutputRestConfigList <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputRestConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationIcebergRestDescribeOutputRestConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get"></a>

```go
func Get(index *f64) CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogApiType">CatalogApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogUri">CatalogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig">CatalogIntegrationIcebergRestDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDelegationMode`<sup>Required</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```go
func AccessDelegationMode() *string
```

- *Type:* *string

---

##### `CatalogApiType`<sup>Required</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```go
func CatalogApiType() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```go
func CatalogUri() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestDescribeOutputRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig">CatalogIntegrationIcebergRestDescribeOutputRestConfig</a>

---


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get"></a>

```go
func Get(index *f64) CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole">Sigv4IamRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">Sigv4SigningRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sigv4IamRole`<sup>Required</sup> <a name="Sigv4IamRole" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```go
func Sigv4IamRole() *string
```

- *Type:* *string

---

##### `Sigv4SigningRegion`<sup>Required</sup> <a name="Sigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```go
func Sigv4SigningRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication</a>

---


### CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resetOauthTokenUri">ResetOauthTokenUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthTokenUri` <a name="ResetOauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resetOauthTokenUri"></a>

```go
func ResetOauthTokenUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopesInput">OauthAllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUriInput">OauthTokenUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUri">OauthTokenUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthAllowedScopesInput`<sup>Optional</sup> <a name="OauthAllowedScopesInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopesInput"></a>

```go
func OauthAllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecretInput"></a>

```go
func OauthClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthTokenUriInput`<sup>Optional</sup> <a name="OauthTokenUriInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUriInput"></a>

```go
func OauthTokenUriInput() *string
```

- *Type:* *string

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecret"></a>

```go
func OauthClientSecret() *string
```

- *Type:* *string

---

##### `OauthTokenUri`<sup>Required</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```go
func OauthTokenUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---


### CatalogIntegrationIcebergRestRestConfigOutputReference <a name="CatalogIntegrationIcebergRestRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestRestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationIcebergRestRestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetAccessDelegationMode">ResetAccessDelegationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogApiType">ResetCatalogApiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessDelegationMode` <a name="ResetAccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetAccessDelegationMode"></a>

```go
func ResetAccessDelegationMode()
```

##### `ResetCatalogApiType` <a name="ResetCatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogApiType"></a>

```go
func ResetCatalogApiType()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationModeInput">AccessDelegationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiTypeInput">CatalogApiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUriInput">CatalogUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiType">CatalogApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUri">CatalogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDelegationModeInput`<sup>Optional</sup> <a name="AccessDelegationModeInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationModeInput"></a>

```go
func AccessDelegationModeInput() *string
```

- *Type:* *string

---

##### `CatalogApiTypeInput`<sup>Optional</sup> <a name="CatalogApiTypeInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiTypeInput"></a>

```go
func CatalogApiTypeInput() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CatalogUriInput`<sup>Optional</sup> <a name="CatalogUriInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUriInput"></a>

```go
func CatalogUriInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `AccessDelegationMode`<sup>Required</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationMode"></a>

```go
func AccessDelegationMode() *string
```

- *Type:* *string

---

##### `CatalogApiType`<sup>Required</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiType"></a>

```go
func CatalogApiType() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUri"></a>

```go
func CatalogUri() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---


### CatalogIntegrationIcebergRestShowOutputList <a name="CatalogIntegrationIcebergRestShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationIcebergRestShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationIcebergRestShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationIcebergRestShowOutputOutputReference <a name="CatalogIntegrationIcebergRestShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationIcebergRestShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput">CatalogIntegrationIcebergRestShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput">CatalogIntegrationIcebergRestShowOutput</a>

---


### CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4ExternalId">ResetSigv4ExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4SigningRegion">ResetSigv4SigningRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSigv4ExternalId` <a name="ResetSigv4ExternalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4ExternalId"></a>

```go
func ResetSigv4ExternalId()
```

##### `ResetSigv4SigningRegion` <a name="ResetSigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4SigningRegion"></a>

```go
func ResetSigv4SigningRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalIdInput">Sigv4ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRoleInput">Sigv4IamRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegionInput">Sigv4SigningRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalId">Sigv4ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRole">Sigv4IamRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">Sigv4SigningRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sigv4ExternalIdInput`<sup>Optional</sup> <a name="Sigv4ExternalIdInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalIdInput"></a>

```go
func Sigv4ExternalIdInput() *string
```

- *Type:* *string

---

##### `Sigv4IamRoleInput`<sup>Optional</sup> <a name="Sigv4IamRoleInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRoleInput"></a>

```go
func Sigv4IamRoleInput() *string
```

- *Type:* *string

---

##### `Sigv4SigningRegionInput`<sup>Optional</sup> <a name="Sigv4SigningRegionInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegionInput"></a>

```go
func Sigv4SigningRegionInput() *string
```

- *Type:* *string

---

##### `Sigv4ExternalId`<sup>Required</sup> <a name="Sigv4ExternalId" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalId"></a>

```go
func Sigv4ExternalId() *string
```

- *Type:* *string

---

##### `Sigv4IamRole`<sup>Required</sup> <a name="Sigv4IamRole" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```go
func Sigv4IamRole() *string
```

- *Type:* *string

---

##### `Sigv4SigningRegion`<sup>Required</sup> <a name="Sigv4SigningRegion" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```go
func Sigv4SigningRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationIcebergRestSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---


### CatalogIntegrationIcebergRestTimeoutsOutputReference <a name="CatalogIntegrationIcebergRestTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationicebergrest"

catalogintegrationicebergrest.NewCatalogIntegrationIcebergRestTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationIcebergRestTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



