# `dataSnowflakeSystemGetAwsSnsIamPolicy` Submodule <a name="`dataSnowflakeSystemGetAwsSnsIamPolicy` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGetAwsSnsIamPolicy <a name="DataSnowflakeSystemGetAwsSnsIamPolicy" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/data-sources/system_get_aws_sns_iam_policy snowflake_system_get_aws_sns_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakesystemgetawssnsiampolicy"

datasnowflakesystemgetawssnsiampolicy.NewDataSnowflakeSystemGetAwsSnsIamPolicy(scope Construct, id *string, config DataSnowflakeSystemGetAwsSnsIamPolicyConfig) DataSnowflakeSystemGetAwsSnsIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig">DataSnowflakeSystemGetAwsSnsIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig">DataSnowflakeSystemGetAwsSnsIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeSystemGetAwsSnsIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakesystemgetawssnsiampolicy"

datasnowflakesystemgetawssnsiampolicy.DataSnowflakeSystemGetAwsSnsIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakesystemgetawssnsiampolicy"

datasnowflakesystemgetawssnsiampolicy.DataSnowflakeSystemGetAwsSnsIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakesystemgetawssnsiampolicy"

datasnowflakesystemgetawssnsiampolicy.DataSnowflakeSystemGetAwsSnsIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakesystemgetawssnsiampolicy"

datasnowflakesystemgetawssnsiampolicy.DataSnowflakeSystemGetAwsSnsIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeSystemGetAwsSnsIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeSystemGetAwsSnsIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeSystemGetAwsSnsIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/data-sources/system_get_aws_sns_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGetAwsSnsIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicPolicyJson">AwsSnsTopicPolicyJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArnInput">AwsSnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AwsSnsTopicPolicyJson`<sup>Required</sup> <a name="AwsSnsTopicPolicyJson" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicPolicyJson"></a>

```go
func AwsSnsTopicPolicyJson() *string
```

- *Type:* *string

---

##### `AwsSnsTopicArnInput`<sup>Optional</sup> <a name="AwsSnsTopicArnInput" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArnInput"></a>

```go
func AwsSnsTopicArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AwsSnsTopicArn`<sup>Required</sup> <a name="AwsSnsTopicArn" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.awsSnsTopicArn"></a>

```go
func AwsSnsTopicArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGetAwsSnsIamPolicyConfig <a name="DataSnowflakeSystemGetAwsSnsIamPolicyConfig" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakesystemgetawssnsiampolicy"

&datasnowflakesystemgetawssnsiampolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AwsSnsTopicArn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.awsSnsTopicArn">AwsSnsTopicArn</a></code> | <code>*string</code> | Amazon Resource Name (ARN) of the SNS topic for your S3 bucket. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/data-sources/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsSnsTopicArn`<sup>Required</sup> <a name="AwsSnsTopicArn" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.awsSnsTopicArn"></a>

```go
AwsSnsTopicArn *string
```

- *Type:* *string

Amazon Resource Name (ARN) of the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/data-sources/system_get_aws_sns_iam_policy#aws_sns_topic_arn DataSnowflakeSystemGetAwsSnsIamPolicy#aws_sns_topic_arn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeSystemGetAwsSnsIamPolicy.DataSnowflakeSystemGetAwsSnsIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/data-sources/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



