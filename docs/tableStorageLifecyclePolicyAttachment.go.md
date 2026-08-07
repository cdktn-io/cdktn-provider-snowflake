# `tableStorageLifecyclePolicyAttachment` Submodule <a name="`tableStorageLifecyclePolicyAttachment` Submodule" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableStorageLifecyclePolicyAttachment <a name="TableStorageLifecyclePolicyAttachment" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment snowflake_table_storage_lifecycle_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

tablestoragelifecyclepolicyattachment.NewTableStorageLifecyclePolicyAttachment(scope Construct, id *string, config TableStorageLifecyclePolicyAttachmentConfig) TableStorageLifecyclePolicyAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig">TableStorageLifecyclePolicyAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig">TableStorageLifecyclePolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts"></a>

```go
func PutTimeouts(value TableStorageLifecyclePolicyAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TableStorageLifecyclePolicyAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

tablestoragelifecyclepolicyattachment.TableStorageLifecyclePolicyAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

tablestoragelifecyclepolicyattachment.TableStorageLifecyclePolicyAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

tablestoragelifecyclepolicyattachment.TableStorageLifecyclePolicyAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

tablestoragelifecyclepolicyattachment.TableStorageLifecyclePolicyAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TableStorageLifecyclePolicyAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TableStorageLifecyclePolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TableStorageLifecyclePolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TableStorageLifecyclePolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference">TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.onInput">OnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyNameInput">StorageLifecyclePolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableTypeInput">TableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.on">On</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyName">StorageLifecyclePolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeouts"></a>

```go
func Timeouts() TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference">TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OnInput`<sup>Optional</sup> <a name="OnInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.onInput"></a>

```go
func OnInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageLifecyclePolicyNameInput`<sup>Optional</sup> <a name="StorageLifecyclePolicyNameInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyNameInput"></a>

```go
func StorageLifecyclePolicyNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableTypeInput"></a>

```go
func TableTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.on"></a>

```go
func On() *[]*string
```

- *Type:* *[]*string

---

##### `StorageLifecyclePolicyName`<sup>Required</sup> <a name="StorageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.storageLifecyclePolicyName"></a>

```go
func StorageLifecyclePolicyName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TableStorageLifecyclePolicyAttachmentConfig <a name="TableStorageLifecyclePolicyAttachmentConfig" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

&tablestoragelifecyclepolicyattachment.TableStorageLifecyclePolicyAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	On: *[]*string,
	StorageLifecyclePolicyName: *string,
	TableName: *string,
	TableType: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.on">On</a></code> | <code>*[]*string</code> | List of the columns the storage lifecycle policy applies to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.storageLifecyclePolicyName">StorageLifecyclePolicyName</a></code> | <code>*string</code> | Fully qualified name of the storage lifecycle policy to attach to the table. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableName">TableName</a></code> | <code>*string</code> | Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableType">TableType</a></code> | <code>*string</code> | Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` \| `DYNAMIC_TABLE`. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `On`<sup>Required</sup> <a name="On" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.on"></a>

```go
On *[]*string
```

- *Type:* *[]*string

List of the columns the storage lifecycle policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#on TableStorageLifecyclePolicyAttachment#on}

---

##### `StorageLifecyclePolicyName`<sup>Required</sup> <a name="StorageLifecyclePolicyName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.storageLifecyclePolicyName"></a>

```go
StorageLifecyclePolicyName *string
```

- *Type:* *string

Fully qualified name of the storage lifecycle policy to attach to the table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#storage_lifecycle_policy_name TableStorageLifecyclePolicyAttachment#storage_lifecycle_policy_name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Fully qualified name of the table (or dynamic table) the storage lifecycle policy is attached to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#table_name TableStorageLifecyclePolicyAttachment#table_name}

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.tableType"></a>

```go
TableType *string
```

- *Type:* *string

Specifies the type of the table referenced in `table_name`. Valid values are (case-insensitive): `TABLE` | `DYNAMIC_TABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#table_type TableStorageLifecyclePolicyAttachment#table_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#id TableStorageLifecyclePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentConfig.property.timeouts"></a>

```go
Timeouts TableStorageLifecyclePolicyAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts">TableStorageLifecyclePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#timeouts TableStorageLifecyclePolicyAttachment#timeouts}

---

### TableStorageLifecyclePolicyAttachmentTimeouts <a name="TableStorageLifecyclePolicyAttachmentTimeouts" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

&tablestoragelifecyclepolicyattachment.TableStorageLifecyclePolicyAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#create TableStorageLifecyclePolicyAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#delete TableStorageLifecyclePolicyAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#read TableStorageLifecyclePolicyAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#update TableStorageLifecyclePolicyAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#create TableStorageLifecyclePolicyAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#delete TableStorageLifecyclePolicyAttachment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#read TableStorageLifecyclePolicyAttachment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/table_storage_lifecycle_policy_attachment#update TableStorageLifecyclePolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference <a name="TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/tablestoragelifecyclepolicyattachment"

tablestoragelifecyclepolicyattachment.NewTableStorageLifecyclePolicyAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.tableStorageLifecyclePolicyAttachment.TableStorageLifecyclePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



