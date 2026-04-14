# `catalogIntegrationOpenCatalog` Submodule <a name="`catalogIntegrationOpenCatalog` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationOpenCatalog <a name="CatalogIntegrationOpenCatalog" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog snowflake_catalog_integration_open_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalog(scope Construct, id *string, config CatalogIntegrationOpenCatalogConfig) CatalogIntegrationOpenCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig">CatalogIntegrationOpenCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig">CatalogIntegrationOpenCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication">PutRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig">PutRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetCatalogNamespace">ResetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetRefreshIntervalSeconds">ResetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestAuthentication` <a name="PutRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication"></a>

```go
func PutRestAuthentication(value CatalogIntegrationOpenCatalogRestAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---

##### `PutRestConfig` <a name="PutRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig"></a>

```go
func PutRestConfig(value CatalogIntegrationOpenCatalogRestConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts"></a>

```go
func PutTimeouts(value CatalogIntegrationOpenCatalogTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

---

##### `ResetCatalogNamespace` <a name="ResetCatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetCatalogNamespace"></a>

```go
func ResetCatalogNamespace()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshIntervalSeconds` <a name="ResetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetRefreshIntervalSeconds"></a>

```go
func ResetRefreshIntervalSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.CatalogIntegrationOpenCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.CatalogIntegrationOpenCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.CatalogIntegrationOpenCatalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.CatalogIntegrationOpenCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CatalogIntegrationOpenCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CatalogIntegrationOpenCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationOpenCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList">CatalogIntegrationOpenCatalogDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthentication">RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference">CatalogIntegrationOpenCatalogRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference">CatalogIntegrationOpenCatalogRestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList">CatalogIntegrationOpenCatalogShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference">CatalogIntegrationOpenCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespaceInput">CatalogNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSecondsInput">RefreshIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthenticationInput">RestAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfigInput">RestConfigInput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.describeOutput"></a>

```go
func DescribeOutput() CatalogIntegrationOpenCatalogDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList">CatalogIntegrationOpenCatalogDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `RestAuthentication`<sup>Required</sup> <a name="RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthentication"></a>

```go
func RestAuthentication() CatalogIntegrationOpenCatalogRestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference">CatalogIntegrationOpenCatalogRestAuthenticationOutputReference</a>

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfig"></a>

```go
func RestConfig() CatalogIntegrationOpenCatalogRestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference">CatalogIntegrationOpenCatalogRestConfigOutputReference</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.showOutput"></a>

```go
func ShowOutput() CatalogIntegrationOpenCatalogShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList">CatalogIntegrationOpenCatalogShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeouts"></a>

```go
func Timeouts() CatalogIntegrationOpenCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference">CatalogIntegrationOpenCatalogTimeoutsOutputReference</a>

---

##### `CatalogNamespaceInput`<sup>Optional</sup> <a name="CatalogNamespaceInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespaceInput"></a>

```go
func CatalogNamespaceInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalSecondsInput`<sup>Optional</sup> <a name="RefreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSecondsInput"></a>

```go
func RefreshIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `RestAuthenticationInput`<sup>Optional</sup> <a name="RestAuthenticationInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthenticationInput"></a>

```go
func RestAuthenticationInput() CatalogIntegrationOpenCatalogRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---

##### `RestConfigInput`<sup>Optional</sup> <a name="RestConfigInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfigInput"></a>

```go
func RestConfigInput() CatalogIntegrationOpenCatalogRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationOpenCatalogConfig <a name="CatalogIntegrationOpenCatalogConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	RestAuthentication: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication,
	RestConfig: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig,
	CatalogNamespace: *string,
	Comment: *string,
	Id: *string,
	RefreshIntervalSeconds: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restAuthentication">RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.comment">Comment</a></code> | <code>*string</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#enabled CatalogIntegrationOpenCatalog#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#name CatalogIntegrationOpenCatalog#name}

---

##### `RestAuthentication`<sup>Required</sup> <a name="RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restAuthentication"></a>

```go
RestAuthentication CatalogIntegrationOpenCatalogRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_authentication CatalogIntegrationOpenCatalog#rest_authentication}

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restConfig"></a>

```go
RestConfig CatalogIntegrationOpenCatalogRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_config CatalogIntegrationOpenCatalog#rest_config}

---

##### `CatalogNamespace`<sup>Optional</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.catalogNamespace"></a>

```go
CatalogNamespace *string
```

- *Type:* *string

Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_namespace CatalogIntegrationOpenCatalog#catalog_namespace}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#comment CatalogIntegrationOpenCatalog#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshIntervalSeconds`<sup>Optional</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.refreshIntervalSeconds"></a>

```go
RefreshIntervalSeconds *f64
```

- *Type:* *f64

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#refresh_interval_seconds CatalogIntegrationOpenCatalog#refresh_interval_seconds}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.timeouts"></a>

```go
Timeouts CatalogIntegrationOpenCatalogTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#timeouts CatalogIntegrationOpenCatalog#timeouts}

---

### CatalogIntegrationOpenCatalogDescribeOutput <a name="CatalogIntegrationOpenCatalogDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogDescribeOutput {

}
```


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication {

}
```


### CatalogIntegrationOpenCatalogDescribeOutputRestConfig <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig {

}
```


### CatalogIntegrationOpenCatalogRestAuthentication <a name="CatalogIntegrationOpenCatalogRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogRestAuthentication {
	OauthAllowedScopes: *[]*string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	OauthTokenUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | Specifies one or more scopes for the OAuth token. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthTokenUri">OauthTokenUri</a></code> | <code>*string</code> | Specifies URL for the third-party identity provider. |

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthAllowedScopes"></a>

```go
OauthAllowedScopes *[]*string
```

- *Type:* *[]*string

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_allowed_scopes CatalogIntegrationOpenCatalog#oauth_allowed_scopes}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_id CatalogIntegrationOpenCatalog#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_secret CatalogIntegrationOpenCatalog#oauth_client_secret}

---

##### `OauthTokenUri`<sup>Optional</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthTokenUri"></a>

```go
OauthTokenUri *string
```

- *Type:* *string

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_token_uri CatalogIntegrationOpenCatalog#oauth_token_uri}

---

### CatalogIntegrationOpenCatalogRestConfig <a name="CatalogIntegrationOpenCatalogRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogRestConfig {
	CatalogName: *string,
	CatalogUri: *string,
	AccessDelegationMode: *string,
	CatalogApiType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Specifies the name of the catalog to use in Open Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogUri">CatalogUri</a></code> | <code>*string</code> | Specifies Open Catalog account URL. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>*string</code> | Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogApiType">CatalogApiType</a></code> | <code>*string</code> | Specifies how Snowflake connects to Open Catalog. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Specifies the name of the catalog to use in Open Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_name CatalogIntegrationOpenCatalog#catalog_name}

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogUri"></a>

```go
CatalogUri *string
```

- *Type:* *string

Specifies Open Catalog account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_uri CatalogIntegrationOpenCatalog#catalog_uri}

---

##### `AccessDelegationMode`<sup>Optional</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.accessDelegationMode"></a>

```go
AccessDelegationMode *string
```

- *Type:* *string

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#access_delegation_mode CatalogIntegrationOpenCatalog#access_delegation_mode}

---

##### `CatalogApiType`<sup>Optional</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogApiType"></a>

```go
CatalogApiType *string
```

- *Type:* *string

Specifies how Snowflake connects to Open Catalog.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_api_type CatalogIntegrationOpenCatalog#catalog_api_type}

---

### CatalogIntegrationOpenCatalogShowOutput <a name="CatalogIntegrationOpenCatalogShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogShowOutput {

}
```


### CatalogIntegrationOpenCatalogTimeouts <a name="CatalogIntegrationOpenCatalogTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

&catalogintegrationopencatalog.CatalogIntegrationOpenCatalogTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationOpenCatalogDescribeOutputList <a name="CatalogIntegrationOpenCatalogDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationOpenCatalogDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationOpenCatalogDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationOpenCatalogDescribeOutputOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationOpenCatalogDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogSource">CatalogSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restAuthentication">RestAuthentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList">CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restConfig">RestConfig</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList">CatalogIntegrationOpenCatalogDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput">CatalogIntegrationOpenCatalogDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogNamespace"></a>

```go
func CatalogNamespace() *string
```

- *Type:* *string

---

##### `CatalogSource`<sup>Required</sup> <a name="CatalogSource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogSource"></a>

```go
func CatalogSource() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `RestAuthentication`<sup>Required</sup> <a name="RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restAuthentication"></a>

```go
func RestAuthentication() CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList">CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList</a>

---

##### `RestConfig`<sup>Required</sup> <a name="RestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restConfig"></a>

```go
func RestConfig() CatalogIntegrationOpenCatalogDescribeOutputRestConfigList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList">CatalogIntegrationOpenCatalogDescribeOutputRestConfigList</a>

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationOpenCatalogDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput">CatalogIntegrationOpenCatalogDescribeOutput</a>

---


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get"></a>

```go
func Get(index *f64) CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthTokenUri">OauthTokenUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication">CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthTokenUri`<sup>Required</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```go
func OauthTokenUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication">CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication</a>

---


### CatalogIntegrationOpenCatalogDescribeOutputRestConfigList <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogDescribeOutputRestConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationOpenCatalogDescribeOutputRestConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get"></a>

```go
func Get(index *f64) CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogApiType">CatalogApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogUri">CatalogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig">CatalogIntegrationOpenCatalogDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDelegationMode`<sup>Required</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```go
func AccessDelegationMode() *string
```

- *Type:* *string

---

##### `CatalogApiType`<sup>Required</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```go
func CatalogApiType() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```go
func CatalogUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationOpenCatalogDescribeOutputRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig">CatalogIntegrationOpenCatalogDescribeOutputRestConfig</a>

---


### CatalogIntegrationOpenCatalogRestAuthenticationOutputReference <a name="CatalogIntegrationOpenCatalogRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogRestAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationOpenCatalogRestAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resetOauthTokenUri">ResetOauthTokenUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthTokenUri` <a name="ResetOauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resetOauthTokenUri"></a>

```go
func ResetOauthTokenUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopesInput">OauthAllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUriInput">OauthTokenUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUri">OauthTokenUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthAllowedScopesInput`<sup>Optional</sup> <a name="OauthAllowedScopesInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopesInput"></a>

```go
func OauthAllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecretInput"></a>

```go
func OauthClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthTokenUriInput`<sup>Optional</sup> <a name="OauthTokenUriInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUriInput"></a>

```go
func OauthTokenUriInput() *string
```

- *Type:* *string

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecret"></a>

```go
func OauthClientSecret() *string
```

- *Type:* *string

---

##### `OauthTokenUri`<sup>Required</sup> <a name="OauthTokenUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```go
func OauthTokenUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationOpenCatalogRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---


### CatalogIntegrationOpenCatalogRestConfigOutputReference <a name="CatalogIntegrationOpenCatalogRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogRestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationOpenCatalogRestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetAccessDelegationMode">ResetAccessDelegationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetCatalogApiType">ResetCatalogApiType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessDelegationMode` <a name="ResetAccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetAccessDelegationMode"></a>

```go
func ResetAccessDelegationMode()
```

##### `ResetCatalogApiType` <a name="ResetCatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetCatalogApiType"></a>

```go
func ResetCatalogApiType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationModeInput">AccessDelegationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiTypeInput">CatalogApiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUriInput">CatalogUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationMode">AccessDelegationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiType">CatalogApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUri">CatalogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessDelegationModeInput`<sup>Optional</sup> <a name="AccessDelegationModeInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationModeInput"></a>

```go
func AccessDelegationModeInput() *string
```

- *Type:* *string

---

##### `CatalogApiTypeInput`<sup>Optional</sup> <a name="CatalogApiTypeInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiTypeInput"></a>

```go
func CatalogApiTypeInput() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CatalogUriInput`<sup>Optional</sup> <a name="CatalogUriInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUriInput"></a>

```go
func CatalogUriInput() *string
```

- *Type:* *string

---

##### `AccessDelegationMode`<sup>Required</sup> <a name="AccessDelegationMode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationMode"></a>

```go
func AccessDelegationMode() *string
```

- *Type:* *string

---

##### `CatalogApiType`<sup>Required</sup> <a name="CatalogApiType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiType"></a>

```go
func CatalogApiType() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `CatalogUri`<sup>Required</sup> <a name="CatalogUri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUri"></a>

```go
func CatalogUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationOpenCatalogRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---


### CatalogIntegrationOpenCatalogShowOutputList <a name="CatalogIntegrationOpenCatalogShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationOpenCatalogShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationOpenCatalogShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationOpenCatalogShowOutputOutputReference <a name="CatalogIntegrationOpenCatalogShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationOpenCatalogShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput">CatalogIntegrationOpenCatalogShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationOpenCatalogShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput">CatalogIntegrationOpenCatalogShowOutput</a>

---


### CatalogIntegrationOpenCatalogTimeoutsOutputReference <a name="CatalogIntegrationOpenCatalogTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationopencatalog"

catalogintegrationopencatalog.NewCatalogIntegrationOpenCatalogTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationOpenCatalogTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



