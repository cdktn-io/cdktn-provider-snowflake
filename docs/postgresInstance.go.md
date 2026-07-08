# `postgresInstance` Submodule <a name="`postgresInstance` Submodule" id="@cdktn/provider-snowflake.postgresInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresInstance <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance snowflake_postgres_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.NewPostgresInstance(scope Construct, id *string, config PostgresInstanceConfig) PostgresInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig">PostgresInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig">PostgresInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability">ResetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart">ResetMaintenanceWindowStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings">ResetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration">ResetStorageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts"></a>

```go
func PutTimeouts(value PostgresInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment"></a>

```go
func ResetComment()
```

##### `ResetHighAvailability` <a name="ResetHighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability"></a>

```go
func ResetHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintenanceWindowStart` <a name="ResetMaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart"></a>

```go
func ResetMaintenanceWindowStart()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy"></a>

```go
func ResetNetworkPolicy()
```

##### `ResetPostgresSettings` <a name="ResetPostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings"></a>

```go
func ResetPostgresSettings()
```

##### `ResetStorageIntegration` <a name="ResetStorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration"></a>

```go
func ResetStorageIntegration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.PostgresInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.PostgresInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.PostgresInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.PostgresInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PostgresInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PostgresInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PostgresInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput">AuthenticationAuthorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput">ComputeFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput">HighAvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput">MaintenanceWindowStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput">PostgresSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput">PostgresVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput">StorageIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput">StorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily">ComputeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability">HighAvailability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings">PostgresSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion">PostgresVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb">StorageSizeGb</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput"></a>

```go
func DescribeOutput() PostgresInstanceDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput"></a>

```go
func ShowOutput() PostgresInstanceShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts"></a>

```go
func Timeouts() PostgresInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a>

---

##### `AuthenticationAuthorityInput`<sup>Optional</sup> <a name="AuthenticationAuthorityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput"></a>

```go
func AuthenticationAuthorityInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ComputeFamilyInput`<sup>Optional</sup> <a name="ComputeFamilyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput"></a>

```go
func ComputeFamilyInput() *string
```

- *Type:* *string

---

##### `HighAvailabilityInput`<sup>Optional</sup> <a name="HighAvailabilityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput"></a>

```go
func HighAvailabilityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowStartInput`<sup>Optional</sup> <a name="MaintenanceWindowStartInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput"></a>

```go
func MaintenanceWindowStartInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput"></a>

```go
func NetworkPolicyInput() *string
```

- *Type:* *string

---

##### `PostgresSettingsInput`<sup>Optional</sup> <a name="PostgresSettingsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput"></a>

```go
func PostgresSettingsInput() *string
```

- *Type:* *string

---

##### `PostgresVersionInput`<sup>Optional</sup> <a name="PostgresVersionInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput"></a>

```go
func PostgresVersionInput() *f64
```

- *Type:* *f64

---

##### `StorageIntegrationInput`<sup>Optional</sup> <a name="StorageIntegrationInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput"></a>

```go
func StorageIntegrationInput() *string
```

- *Type:* *string

---

##### `StorageSizeGbInput`<sup>Optional</sup> <a name="StorageSizeGbInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput"></a>

```go
func StorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority"></a>

```go
func AuthenticationAuthority() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily"></a>

```go
func ComputeFamily() *string
```

- *Type:* *string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability"></a>

```go
func HighAvailability() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart"></a>

```go
func MaintenanceWindowStart() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy"></a>

```go
func NetworkPolicy() *string
```

- *Type:* *string

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings"></a>

```go
func PostgresSettings() *string
```

- *Type:* *string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion"></a>

```go
func PostgresVersion() *f64
```

- *Type:* *f64

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration"></a>

```go
func StorageIntegration() *string
```

- *Type:* *string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb"></a>

```go
func StorageSizeGb() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresInstanceConfig <a name="PostgresInstanceConfig" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

&postgresinstance.PostgresInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationAuthority: *string,
	ComputeFamily: *string,
	Name: *string,
	PostgresVersion: *f64,
	StorageSizeGb: *f64,
	Comment: *string,
	HighAvailability: *string,
	Id: *string,
	MaintenanceWindowStart: *f64,
	NetworkPolicy: *string,
	PostgresSettings: *string,
	StorageIntegration: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.postgresInstance.PostgresInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>*string</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily">ComputeFamily</a></code> | <code>*string</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion">PostgresVersion</a></code> | <code>*f64</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb">StorageSizeGb</a></code> | <code>*f64</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability">HighAvailability</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>*f64</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings">PostgresSettings</a></code> | <code>*string</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority"></a>

```go
AuthenticationAuthority *string
```

- *Type:* *string

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily"></a>

```go
ComputeFamily *string
```

- *Type:* *string

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion"></a>

```go
PostgresVersion *f64
```

- *Type:* *f64

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb"></a>

```go
StorageSizeGb *f64
```

- *Type:* *f64

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `HighAvailability`<sup>Optional</sup> <a name="HighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability"></a>

```go
HighAvailability *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintenanceWindowStart`<sup>Optional</sup> <a name="MaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart"></a>

```go
MaintenanceWindowStart *f64
```

- *Type:* *f64

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy"></a>

```go
NetworkPolicy *string
```

- *Type:* *string

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `PostgresSettings`<sup>Optional</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings"></a>

```go
PostgresSettings *string
```

- *Type:* *string

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `StorageIntegration`<sup>Optional</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration"></a>

```go
StorageIntegration *string
```

- *Type:* *string

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts"></a>

```go
Timeouts PostgresInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

### PostgresInstanceDescribeOutput <a name="PostgresInstanceDescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

&postgresinstance.PostgresInstanceDescribeOutput {

}
```


### PostgresInstanceShowOutput <a name="PostgresInstanceShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

&postgresinstance.PostgresInstanceShowOutput {

}
```


### PostgresInstanceTimeouts <a name="PostgresInstanceTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

&postgresinstance.PostgresInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#create PostgresInstance#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#delete PostgresInstance#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#read PostgresInstance#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#update PostgresInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#create PostgresInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#delete PostgresInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#read PostgresInstance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/postgres_instance#update PostgresInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresInstanceDescribeOutputList <a name="PostgresInstanceDescribeOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.NewPostgresInstanceDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PostgresInstanceDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get"></a>

```go
func Get(index *f64) PostgresInstanceDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### PostgresInstanceDescribeOutputOutputReference <a name="PostgresInstanceDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.NewPostgresInstanceDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PostgresInstanceDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily">ComputeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability">HighAvailability</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart">MaintenanceWindowStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings">PostgresSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion">PostgresVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier">PrivatelinkServiceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime">RetentionTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration">StorageIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb">StorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority"></a>

```go
func AuthenticationAuthority() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily"></a>

```go
func ComputeFamily() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `HighAvailability`<sup>Required</sup> <a name="HighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability"></a>

```go
func HighAvailability() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `MaintenanceWindowStart`<sup>Required</sup> <a name="MaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart"></a>

```go
func MaintenanceWindowStart() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy"></a>

```go
func NetworkPolicy() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings"></a>

```go
func PostgresSettings() *string
```

- *Type:* *string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion"></a>

```go
func PostgresVersion() *f64
```

- *Type:* *f64

---

##### `PrivatelinkServiceIdentifier`<sup>Required</sup> <a name="PrivatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```go
func PrivatelinkServiceIdentifier() *string
```

- *Type:* *string

---

##### `RetentionTime`<sup>Required</sup> <a name="RetentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime"></a>

```go
func RetentionTime() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageIntegration`<sup>Required</sup> <a name="StorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration"></a>

```go
func StorageIntegration() *string
```

- *Type:* *string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb"></a>

```go
func StorageSizeGb() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresInstanceDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a>

---


### PostgresInstanceShowOutputList <a name="PostgresInstanceShowOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.NewPostgresInstanceShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PostgresInstanceShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get"></a>

```go
func Get(index *f64) PostgresInstanceShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### PostgresInstanceShowOutputOutputReference <a name="PostgresInstanceShowOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.NewPostgresInstanceShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PostgresInstanceShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority">AuthenticationAuthority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily">ComputeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa">IsHa</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings">PostgresSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion">PostgresVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier">PrivatelinkServiceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime">RetentionTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize">StorageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationAuthority`<sup>Required</sup> <a name="AuthenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority"></a>

```go
func AuthenticationAuthority() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ComputeFamily`<sup>Required</sup> <a name="ComputeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily"></a>

```go
func ComputeFamily() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IsHa`<sup>Required</sup> <a name="IsHa" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa"></a>

```go
func IsHa() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings"></a>

```go
func PostgresSettings() *string
```

- *Type:* *string

---

##### `PostgresVersion`<sup>Required</sup> <a name="PostgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion"></a>

```go
func PostgresVersion() *string
```

- *Type:* *string

---

##### `PrivatelinkServiceIdentifier`<sup>Required</sup> <a name="PrivatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```go
func PrivatelinkServiceIdentifier() *string
```

- *Type:* *string

---

##### `RetentionTime`<sup>Required</sup> <a name="RetentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime"></a>

```go
func RetentionTime() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageSize`<sup>Required</sup> <a name="StorageSize" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize"></a>

```go
func StorageSize() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresInstanceShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a>

---


### PostgresInstanceTimeoutsOutputReference <a name="PostgresInstanceTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/postgresinstance"

postgresinstance.NewPostgresInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



