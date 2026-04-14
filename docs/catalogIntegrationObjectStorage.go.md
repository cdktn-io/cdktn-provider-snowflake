# `catalogIntegrationObjectStorage` Submodule <a name="`catalogIntegrationObjectStorage` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationObjectStorage <a name="CatalogIntegrationObjectStorage" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage snowflake_catalog_integration_object_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.NewCatalogIntegrationObjectStorage(scope Construct, id *string, config CatalogIntegrationObjectStorageConfig) CatalogIntegrationObjectStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig">CatalogIntegrationObjectStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig">CatalogIntegrationObjectStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetRefreshIntervalSeconds">ResetRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts"></a>

```go
func PutTimeouts(value CatalogIntegrationObjectStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshIntervalSeconds` <a name="ResetRefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetRefreshIntervalSeconds"></a>

```go
func ResetRefreshIntervalSeconds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CatalogIntegrationObjectStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.CatalogIntegrationObjectStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.CatalogIntegrationObjectStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.CatalogIntegrationObjectStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.CatalogIntegrationObjectStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CatalogIntegrationObjectStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CatalogIntegrationObjectStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CatalogIntegrationObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList">CatalogIntegrationObjectStorageDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList">CatalogIntegrationObjectStorageShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference">CatalogIntegrationObjectStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSecondsInput">RefreshIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormatInput">TableFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.describeOutput"></a>

```go
func DescribeOutput() CatalogIntegrationObjectStorageDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList">CatalogIntegrationObjectStorageDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.showOutput"></a>

```go
func ShowOutput() CatalogIntegrationObjectStorageShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList">CatalogIntegrationObjectStorageShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeouts"></a>

```go
func Timeouts() CatalogIntegrationObjectStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference">CatalogIntegrationObjectStorageTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalSecondsInput`<sup>Optional</sup> <a name="RefreshIntervalSecondsInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSecondsInput"></a>

```go
func RefreshIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `TableFormatInput`<sup>Optional</sup> <a name="TableFormatInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormatInput"></a>

```go
func TableFormatInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationObjectStorageConfig <a name="CatalogIntegrationObjectStorageConfig" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

&catalogintegrationobjectstorage.CatalogIntegrationObjectStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	Name: *string,
	TableFormat: *string,
	Comment: *string,
	Id: *string,
	RefreshIntervalSeconds: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.tableFormat">TableFormat</a></code> | <code>*string</code> | Specifies the table format. Valid values are (case-insensitive): `ICEBERG` \| `DELTA`. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.comment">Comment</a></code> | <code>*string</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#id CatalogIntegrationObjectStorage#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#enabled CatalogIntegrationObjectStorage#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#name CatalogIntegrationObjectStorage#name}

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.tableFormat"></a>

```go
TableFormat *string
```

- *Type:* *string

Specifies the table format. Valid values are (case-insensitive): `ICEBERG` | `DELTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#table_format CatalogIntegrationObjectStorage#table_format}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#comment CatalogIntegrationObjectStorage#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#id CatalogIntegrationObjectStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshIntervalSeconds`<sup>Optional</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.refreshIntervalSeconds"></a>

```go
RefreshIntervalSeconds *f64
```

- *Type:* *f64

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#refresh_interval_seconds CatalogIntegrationObjectStorage#refresh_interval_seconds}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageConfig.property.timeouts"></a>

```go
Timeouts CatalogIntegrationObjectStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts">CatalogIntegrationObjectStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#timeouts CatalogIntegrationObjectStorage#timeouts}

---

### CatalogIntegrationObjectStorageDescribeOutput <a name="CatalogIntegrationObjectStorageDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

&catalogintegrationobjectstorage.CatalogIntegrationObjectStorageDescribeOutput {

}
```


### CatalogIntegrationObjectStorageShowOutput <a name="CatalogIntegrationObjectStorageShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

&catalogintegrationobjectstorage.CatalogIntegrationObjectStorageShowOutput {

}
```


### CatalogIntegrationObjectStorageTimeouts <a name="CatalogIntegrationObjectStorageTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

&catalogintegrationobjectstorage.CatalogIntegrationObjectStorageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#create CatalogIntegrationObjectStorage#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#delete CatalogIntegrationObjectStorage#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#read CatalogIntegrationObjectStorage#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#update CatalogIntegrationObjectStorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#create CatalogIntegrationObjectStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#delete CatalogIntegrationObjectStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#read CatalogIntegrationObjectStorage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_object_storage#update CatalogIntegrationObjectStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationObjectStorageDescribeOutputList <a name="CatalogIntegrationObjectStorageDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.NewCatalogIntegrationObjectStorageDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationObjectStorageDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationObjectStorageDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationObjectStorageDescribeOutputOutputReference <a name="CatalogIntegrationObjectStorageDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.NewCatalogIntegrationObjectStorageDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationObjectStorageDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.catalogSource">CatalogSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.refreshIntervalSeconds">RefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput">CatalogIntegrationObjectStorageDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogSource`<sup>Required</sup> <a name="CatalogSource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.catalogSource"></a>

```go
func CatalogSource() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshIntervalSeconds`<sup>Required</sup> <a name="RefreshIntervalSeconds" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```go
func RefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationObjectStorageDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageDescribeOutput">CatalogIntegrationObjectStorageDescribeOutput</a>

---


### CatalogIntegrationObjectStorageShowOutputList <a name="CatalogIntegrationObjectStorageShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.NewCatalogIntegrationObjectStorageShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CatalogIntegrationObjectStorageShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.get"></a>

```go
func Get(index *f64) CatalogIntegrationObjectStorageShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CatalogIntegrationObjectStorageShowOutputOutputReference <a name="CatalogIntegrationObjectStorageShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.NewCatalogIntegrationObjectStorageShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CatalogIntegrationObjectStorageShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput">CatalogIntegrationObjectStorageShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogIntegrationObjectStorageShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageShowOutput">CatalogIntegrationObjectStorageShowOutput</a>

---


### CatalogIntegrationObjectStorageTimeoutsOutputReference <a name="CatalogIntegrationObjectStorageTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/catalogintegrationobjectstorage"

catalogintegrationobjectstorage.NewCatalogIntegrationObjectStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogIntegrationObjectStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.catalogIntegrationObjectStorage.CatalogIntegrationObjectStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



