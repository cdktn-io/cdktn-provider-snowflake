# `objectParameter` Submodule <a name="`objectParameter` Submodule" id="@cdktn/provider-snowflake.objectParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectParameter <a name="ObjectParameter" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter snowflake_object_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.NewObjectParameter(scope Construct, id *string, config ObjectParameterConfig) ObjectParameter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig">ObjectParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig">ObjectParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier">PutObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier">ResetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount">ResetOnAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObjectIdentifier` <a name="PutObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier"></a>

```go
func PutObjectIdentifier(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts"></a>

```go
func PutTimeouts(value ObjectParameterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectIdentifier` <a name="ResetObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier"></a>

```go
func ResetObjectIdentifier()
```

##### `ResetObjectType` <a name="ResetObjectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectType"></a>

```go
func ResetObjectType()
```

##### `ResetOnAccount` <a name="ResetOnAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount"></a>

```go
func ResetOnAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetValueType"></a>

```go
func ResetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObjectParameter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.ObjectParameter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.ObjectParameter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.ObjectParameter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.ObjectParameter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ObjectParameter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObjectParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObjectParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ObjectParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier">ObjectIdentifier</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference">ObjectParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput">ObjectIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput">OnAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccount">OnAccount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObjectIdentifier`<sup>Required</sup> <a name="ObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier"></a>

```go
func ObjectIdentifier() ObjectParameterObjectIdentifierList
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeouts"></a>

```go
func Timeouts() ObjectParameterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference">ObjectParameterTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ObjectIdentifierInput`<sup>Optional</sup> <a name="ObjectIdentifierInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput"></a>

```go
func ObjectIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *string
```

- *Type:* *string

---

##### `OnAccountInput`<sup>Optional</sup> <a name="OnAccountInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput"></a>

```go
func OnAccountInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `OnAccount`<sup>Required</sup> <a name="OnAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccount"></a>

```go
func OnAccount() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectParameterConfig <a name="ObjectParameterConfig" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

&objectparameter.ObjectParameterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	Value: *string,
	Id: *string,
	ObjectIdentifier: interface{},
	ObjectType: *string,
	OnAccount: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19.objectParameter.ObjectParameterTimeouts,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.key">Key</a></code> | <code>*string</code> | Name of object parameter. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.value">Value</a></code> | <code>*string</code> | Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier">ObjectIdentifier</a></code> | <code>interface{}</code> | object_identifier block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType">ObjectType</a></code> | <code>*string</code> | Type of object to which the parameter applies. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount">OnAccount</a></code> | <code>interface{}</code> | (Default: `false`) If true, the object parameter will be set on the account level. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.valueType">ValueType</a></code> | <code>*string</code> | Type of `value`, used only for parameters that the provider does not support yet (forward compatibility). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of object parameter.

Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters). With the `OBJECT_PARAMETER_PARSE_ON_SET` experiment (enabled by default), the provider supports the following parameters, and it parses and quotes their values itself: on the account level (`on_account = true`): `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `ALLOW_BIND_VALUES_ACCESS` | `ALLOW_CLIENT_MFA_CACHING` | `ALLOW_ID_TOKEN` | `ALLOWED_SPCS_WORKLOAD_TYPES` | `AUTOCOMMIT` | `BASE_LOCATION_PREFIX` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CATALOG` | `CATALOG_SYNC` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_ENCRYPTION_KEY_SIZE` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CORTEX_CODE_CLI_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_DESKTOP_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_SNOWSIGHT_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_ENABLED_CROSS_REGION` | `CORTEX_MODELS_ALLOWLIST` | `CSV_TIMESTAMP_FORMAT` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `DEFAULT_DBT_VERSION` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `DEFAULT_NULL_ORDERING` | `DEFAULT_STREAMLIT_COMPUTE_POOL` | `DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE` | `DISABLE_UI_DOWNLOAD_BUTTON` | `DISABLE_USER_PRIVILEGE_GRANTS` | `DISALLOWED_SPCS_WORKLOAD_TYPES` | `ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG` | `ENABLE_BUDGET_EVENT_LOGGING` | `ENABLE_CONSOLE_OUTPUT` | `ENABLE_CORTEX_ANALYST` | `ENABLE_DATA_COMPACTION` | `ENABLE_EGRESS_COST_OPTIMIZER` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_ICEBERG_MERGE_ON_READ` | `ENABLE_IDENTIFIER_FIRST_LOGIN` | `ENABLE_INTERNAL_STAGES_PRIVATELINK` | `ENABLE_NOTEBOOK_CREATION_IN_PERSONAL_DB` | `ENABLE_PER_ACCOUNT_APP_SERVICE_PRIVATELINK_URL` | `ENABLE_PERSONAL_DATABASE` | `ENABLE_SPCS_BLOCK_STORAGE_SNOWFLAKE_FULL_ENCRYPTION_ENFORCEMENT` | `ENABLE_TAG_PROPAGATION_EVENT_LOGGING` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE` | `ENABLE_UNHANDLED_EXCEPTIONS_REPORTING` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ENABLE_UNREDACTED_SECURE_OBJECT_ERROR` | `ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `EVENT_TABLE` | `EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `EXTERNAL_VOLUME` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `ICEBERG_VERSION_DEFAULT` | `INITIAL_REPLICATION_SIZE_LIMIT_IN_TB` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_CONCURRENCY_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `METRIC_LEVEL` | `MIN_DATA_RETENTION_TIME_IN_DAYS` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `ODBC_TREAT_DECIMAL_AS_INT` | `PERIODIC_DATA_REKEYING` | `PIPE_EXECUTION_PAUSED` | `PREVENT_LOAD_FROM_INLINE_URL` | `PREVENT_UNLOAD_TO_INLINE_URL` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `READ_CONSISTENCY_MODE` | `REPLACE_INVALID_CHARACTERS` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION` | `ROW_TIMESTAMP_DEFAULT` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `SHARE_RESTRICTIONS` | `SIMULATED_DATA_SHARING_CONSUMER` | `SQL_TRACE_QUERY_TEXT` | `SSO_LOGIN_PAGE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STORAGE_SERIALIZATION_POLICY` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USE_WORKSPACES_FOR_SQL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `DATABASE`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `SCHEMA`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `PIPE_EXECUTION_PAUSED` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `WAREHOUSE`: `MAX_CONCURRENCY_LEVEL` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS`; `USER`: `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CSV_TIMESTAMP_FORMAT` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SIMULATED_DATA_SHARING_CONSUMER` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `TASK`: `ABORT_DETACHED_QUERY` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `SERVICE`: `SERVICE_CALLER_TOKEN_VALIDITY_SECS`; `HYBRID TABLE`: `DATA_RETENTION_TIME_IN_DAYS` | `MAX_DATA_EXTENSION_TIME_IN_DAYS`; `ICEBERG TABLE`: `ALLOW_ROW_TIMESTAMP` | `CATALOG` | `CATALOG_SYNC` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `ENABLE_DATA_COMPACTION` | `ENABLE_ICEBERG_MERGE_ON_READ` | `EXTERNAL_VOLUME` | `ICEBERG_MERGE_ON_READ_BEHAVIOR` | `LOG_EVENT_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `OPTIMIZE_DATA_LAYOUT` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `TARGET_FILE_SIZE`. Any other parameter, and any parameter on any other object type, is sent to Snowflake as is: with `value_type`, the value is rendered by it, and without it, the value is sent as written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#key ObjectParameter#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value ObjectParameter#value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectIdentifier`<sup>Optional</sup> <a name="ObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier"></a>

```go
ObjectIdentifier interface{}
```

- *Type:* interface{}

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_identifier ObjectParameter#object_identifier}

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType"></a>

```go
ObjectType *string
```

- *Type:* *string

Type of object to which the parameter applies.

Valid values are those in [object types](https://docs.snowflake.com/en/sql-reference/parameters.html#object-types). If no value is provided, then the resource will default to setting the object parameter at account level. The provider supports the parameters of the following object types: `DATABASE` | `SCHEMA` | `WAREHOUSE` | `USER` | `TASK` | `SERVICE` | `HYBRID TABLE` | `ICEBERG TABLE` (see `key`). Other object types are sent as is, with the value rendered by `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_type ObjectParameter#object_type}

---

##### `OnAccount`<sup>Optional</sup> <a name="OnAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount"></a>

```go
OnAccount interface{}
```

- *Type:* interface{}

(Default: `false`) If true, the object parameter will be set on the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#on_account ObjectParameter#on_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.timeouts"></a>

```go
Timeouts ObjectParameterTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#timeouts ObjectParameter#timeouts}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Type of `value`, used only for parameters that the provider does not support yet (forward compatibility).

Valid values are (case-insensitive): `STRING` | `IDENTIFIER` | `INTEGER` | `FLOAT` | `BOOLEAN`. `value` is rendered the same way as for the parameters that the provider supports: `STRING` (also use it for enum parameters) is sent as a single-quoted string, `IDENTIFIER` as a quoted identifier (it can be fully qualified, e.g. `DB.SCHEMA.NAME`), and the others as a number or a boolean. The field is required for a parameter that the provider does not support, and it is ignored for the supported parameters (they are listed in the `key` field description, per object type), so it can stay in the configuration when a later provider version starts to support the parameter. Changes of this field are ignored for the supported parameters, but setting it for a supported parameter logs a warning. The field works only with the OBJECT_PARAMETER_PARSE_ON_SET experiment (enabled by default). The transition does not need configuration changes only if `value_type` matches the type of the parameter in Snowflake. Some types are easy to confuse: for example, an identifier (like a network policy name) is also accepted by Snowflake as a `STRING`, but once the provider supports the parameter, it is sent as a quoted, case-sensitive identifier, which may show a plan difference or fail. Check the parameter type in the [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/parameters) before choosing `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value_type ObjectParameter#value_type}

---

### ObjectParameterObjectIdentifier <a name="ObjectParameterObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

&objectparameter.ObjectParameterObjectIdentifier {
	Name: *string,
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name">Name</a></code> | <code>*string</code> | Name of the object to set the parameter for. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database">Database</a></code> | <code>*string</code> | Name of the database that the object was created in. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema">Schema</a></code> | <code>*string</code> | Name of the schema that the object was created in. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the object to set the parameter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#name ObjectParameter#name}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database"></a>

```go
Database *string
```

- *Type:* *string

Name of the database that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#database ObjectParameter#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Name of the schema that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#schema ObjectParameter#schema}

---

### ObjectParameterTimeouts <a name="ObjectParameterTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

&objectparameter.ObjectParameterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectParameterObjectIdentifierList <a name="ObjectParameterObjectIdentifierList" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.NewObjectParameterObjectIdentifierList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObjectParameterObjectIdentifierList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get"></a>

```go
func Get(index *f64) ObjectParameterObjectIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObjectParameterObjectIdentifierOutputReference <a name="ObjectParameterObjectIdentifierOutputReference" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.NewObjectParameterObjectIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObjectParameterObjectIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObjectParameterTimeoutsOutputReference <a name="ObjectParameterTimeoutsOutputReference" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/objectparameter"

objectparameter.NewObjectParameterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObjectParameterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



