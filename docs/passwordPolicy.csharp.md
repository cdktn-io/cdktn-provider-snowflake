# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktn/provider-snowflake.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy snowflake_password_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicy(Construct Scope, string Id, PasswordPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory">ResetHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists">ResetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins">ResetLockoutTimeMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays">ResetMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays">ResetMinAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars">ResetMinLowerCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars">ResetMinNumericChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars">ResetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars">ResetMinUpperCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace">ResetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(PasswordPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetHistory` <a name="ResetHistory" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory"></a>

```csharp
private void ResetHistory()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIfNotExists` <a name="ResetIfNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists"></a>

```csharp
private void ResetIfNotExists()
```

##### `ResetLockoutTimeMins` <a name="ResetLockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins"></a>

```csharp
private void ResetLockoutTimeMins()
```

##### `ResetMaxAgeDays` <a name="ResetMaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays"></a>

```csharp
private void ResetMaxAgeDays()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetMinAgeDays` <a name="ResetMinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays"></a>

```csharp
private void ResetMinAgeDays()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetMinLowerCaseChars` <a name="ResetMinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars"></a>

```csharp
private void ResetMinLowerCaseChars()
```

##### `ResetMinNumericChars` <a name="ResetMinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars"></a>

```csharp
private void ResetMinNumericChars()
```

##### `ResetMinSpecialChars` <a name="ResetMinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars"></a>

```csharp
private void ResetMinSpecialChars()
```

##### `ResetMinUpperCaseChars` <a name="ResetMinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars"></a>

```csharp
private void ResetMinUpperCaseChars()
```

##### `ResetOrReplace` <a name="ResetOrReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace"></a>

```csharp
private void ResetOrReplace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PasswordPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PasswordPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PasswordPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PasswordPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PasswordPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList">PasswordPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList">PasswordPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput">HistoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput">IfNotExistsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput">LockoutTimeMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput">MaxAgeDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput">MinAgeDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput">MinLowerCaseCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput">MinNumericCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput">MinSpecialCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput">MinUpperCaseCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput">OrReplaceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.history">History</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists">IfNotExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins">LockoutTimeMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays">MaxAgeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays">MinAgeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars">MinLowerCaseChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars">MinNumericChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars">MinSpecialChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars">MinUpperCaseChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace">OrReplace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.describeOutput"></a>

```csharp
public PasswordPolicyDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList">PasswordPolicyDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.showOutput"></a>

```csharp
public PasswordPolicyShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList">PasswordPolicyShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts"></a>

```csharp
public PasswordPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HistoryInput`<sup>Optional</sup> <a name="HistoryInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput"></a>

```csharp
public double HistoryInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IfNotExistsInput`<sup>Optional</sup> <a name="IfNotExistsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput"></a>

```csharp
public bool|IResolvable IfNotExistsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LockoutTimeMinsInput`<sup>Optional</sup> <a name="LockoutTimeMinsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput"></a>

```csharp
public double LockoutTimeMinsInput { get; }
```

- *Type:* double

---

##### `MaxAgeDaysInput`<sup>Optional</sup> <a name="MaxAgeDaysInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput"></a>

```csharp
public double MaxAgeDaysInput { get; }
```

- *Type:* double

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MinAgeDaysInput`<sup>Optional</sup> <a name="MinAgeDaysInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput"></a>

```csharp
public double MinAgeDaysInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `MinLowerCaseCharsInput`<sup>Optional</sup> <a name="MinLowerCaseCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput"></a>

```csharp
public double MinLowerCaseCharsInput { get; }
```

- *Type:* double

---

##### `MinNumericCharsInput`<sup>Optional</sup> <a name="MinNumericCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput"></a>

```csharp
public double MinNumericCharsInput { get; }
```

- *Type:* double

---

##### `MinSpecialCharsInput`<sup>Optional</sup> <a name="MinSpecialCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput"></a>

```csharp
public double MinSpecialCharsInput { get; }
```

- *Type:* double

---

##### `MinUpperCaseCharsInput`<sup>Optional</sup> <a name="MinUpperCaseCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput"></a>

```csharp
public double MinUpperCaseCharsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrReplaceInput`<sup>Optional</sup> <a name="OrReplaceInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput"></a>

```csharp
public bool|IResolvable OrReplaceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|PasswordPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `History`<sup>Required</sup> <a name="History" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.history"></a>

```csharp
public double History { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IfNotExists`<sup>Required</sup> <a name="IfNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LockoutTimeMins`<sup>Required</sup> <a name="LockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins"></a>

```csharp
public double LockoutTimeMins { get; }
```

- *Type:* double

---

##### `MaxAgeDays`<sup>Required</sup> <a name="MaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays"></a>

```csharp
public double MaxAgeDays { get; }
```

- *Type:* double

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `MinAgeDays`<sup>Required</sup> <a name="MinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays"></a>

```csharp
public double MinAgeDays { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `MinLowerCaseChars`<sup>Required</sup> <a name="MinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars"></a>

```csharp
public double MinLowerCaseChars { get; }
```

- *Type:* double

---

##### `MinNumericChars`<sup>Required</sup> <a name="MinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars"></a>

```csharp
public double MinNumericChars { get; }
```

- *Type:* double

---

##### `MinSpecialChars`<sup>Required</sup> <a name="MinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars"></a>

```csharp
public double MinSpecialChars { get; }
```

- *Type:* double

---

##### `MinUpperCaseChars`<sup>Required</sup> <a name="MinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars"></a>

```csharp
public double MinUpperCaseChars { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrReplace`<sup>Required</sup> <a name="OrReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace"></a>

```csharp
public bool|IResolvable OrReplace { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string Name,
    string Schema,
    string Comment = null,
    double History = null,
    string Id = null,
    bool|IResolvable IfNotExists = null,
    double LockoutTimeMins = null,
    double MaxAgeDays = null,
    double MaxLength = null,
    double MaxRetries = null,
    double MinAgeDays = null,
    double MinLength = null,
    double MinLowerCaseChars = null,
    double MinNumericChars = null,
    double MinSpecialChars = null,
    double MinUpperCaseChars = null,
    bool|IResolvable OrReplace = null,
    PasswordPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database">Database</a></code> | <code>string</code> | The database this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name">Name</a></code> | <code>string</code> | Identifier for the password policy; |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema">Schema</a></code> | <code>string</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history">History</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists">IfNotExists</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `false`) Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins">LockoutTimeMins</a></code> | <code>double</code> | Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays">MaxAgeDays</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength">MaxLength</a></code> | <code>double</code> | Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays">MinAgeDays</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength">MinLength</a></code> | <code>double</code> | Specifies the minimum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars">MinLowerCaseChars</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars">MinNumericChars</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars">MinSpecialChars</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars">MinUpperCaseChars</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace">OrReplace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `false`) Whether to override a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database this password policy belongs to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier for the password policy;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema this password policy belongs to.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `History`<sup>Optional</sup> <a name="History" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history"></a>

```csharp
public double History { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of the most recent passwords that Snowflake stores.

These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#history PasswordPolicy#history}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IfNotExists`<sup>Optional</sup> <a name="IfNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists"></a>

```csharp
public bool|IResolvable IfNotExists { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `false`) Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `LockoutTimeMins`<sup>Optional</sup> <a name="LockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins"></a>

```csharp
public double LockoutTimeMins { get; set; }
```

- *Type:* double

Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `MaxAgeDays`<sup>Optional</sup> <a name="MaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays"></a>

```csharp
public double MaxAgeDays { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the maximum number of days before the password must be changed.

A value of zero (i.e. 0) indicates that the password does not need to be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Specifies the maximum number of attempts to enter a password before being locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `MinAgeDays`<sup>Optional</sup> <a name="MinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays"></a>

```csharp
public double MinAgeDays { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of days the user must wait before a recently changed password can be changed again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Specifies the minimum number of characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `MinLowerCaseChars`<sup>Optional</sup> <a name="MinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars"></a>

```csharp
public double MinLowerCaseChars { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of lowercase characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `MinNumericChars`<sup>Optional</sup> <a name="MinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars"></a>

```csharp
public double MinNumericChars { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of numeric characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `MinSpecialChars`<sup>Optional</sup> <a name="MinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars"></a>

```csharp
public double MinSpecialChars { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of special characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `MinUpperCaseChars`<sup>Optional</sup> <a name="MinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars"></a>

```csharp
public double MinUpperCaseChars { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the minimum number of uppercase characters the password must contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `OrReplace`<sup>Optional</sup> <a name="OrReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace"></a>

```csharp
public bool|IResolvable OrReplace { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `false`) Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts"></a>

```csharp
public PasswordPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}

---

### PasswordPolicyDescribeOutput <a name="PasswordPolicyDescribeOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyDescribeOutput {

};
```


### PasswordPolicyShowOutput <a name="PasswordPolicyShowOutput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyShowOutput {

};
```


### PasswordPolicyTimeouts <a name="PasswordPolicyTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#create PasswordPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#delete PasswordPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#read PasswordPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#update PasswordPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#create PasswordPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#delete PasswordPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#read PasswordPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/password_policy#update PasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PasswordPolicyDescribeOutputList <a name="PasswordPolicyDescribeOutputList" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.get"></a>

```csharp
private PasswordPolicyDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PasswordPolicyDescribeOutputOutputReference <a name="PasswordPolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordHistory">PasswordHistory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordLockoutTimeMins">PasswordLockoutTimeMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxAgeDays">PasswordMaxAgeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxLength">PasswordMaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxRetries">PasswordMaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinAgeDays">PasswordMinAgeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLength">PasswordMinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLowerCaseChars">PasswordMinLowerCaseChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinNumericChars">PasswordMinNumericChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinSpecialChars">PasswordMinSpecialChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinUpperCaseChars">PasswordMinUpperCaseChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput">PasswordPolicyDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PasswordHistory`<sup>Required</sup> <a name="PasswordHistory" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordHistory"></a>

```csharp
public double PasswordHistory { get; }
```

- *Type:* double

---

##### `PasswordLockoutTimeMins`<sup>Required</sup> <a name="PasswordLockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordLockoutTimeMins"></a>

```csharp
public double PasswordLockoutTimeMins { get; }
```

- *Type:* double

---

##### `PasswordMaxAgeDays`<sup>Required</sup> <a name="PasswordMaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxAgeDays"></a>

```csharp
public double PasswordMaxAgeDays { get; }
```

- *Type:* double

---

##### `PasswordMaxLength`<sup>Required</sup> <a name="PasswordMaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxLength"></a>

```csharp
public double PasswordMaxLength { get; }
```

- *Type:* double

---

##### `PasswordMaxRetries`<sup>Required</sup> <a name="PasswordMaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMaxRetries"></a>

```csharp
public double PasswordMaxRetries { get; }
```

- *Type:* double

---

##### `PasswordMinAgeDays`<sup>Required</sup> <a name="PasswordMinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinAgeDays"></a>

```csharp
public double PasswordMinAgeDays { get; }
```

- *Type:* double

---

##### `PasswordMinLength`<sup>Required</sup> <a name="PasswordMinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLength"></a>

```csharp
public double PasswordMinLength { get; }
```

- *Type:* double

---

##### `PasswordMinLowerCaseChars`<sup>Required</sup> <a name="PasswordMinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinLowerCaseChars"></a>

```csharp
public double PasswordMinLowerCaseChars { get; }
```

- *Type:* double

---

##### `PasswordMinNumericChars`<sup>Required</sup> <a name="PasswordMinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinNumericChars"></a>

```csharp
public double PasswordMinNumericChars { get; }
```

- *Type:* double

---

##### `PasswordMinSpecialChars`<sup>Required</sup> <a name="PasswordMinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinSpecialChars"></a>

```csharp
public double PasswordMinSpecialChars { get; }
```

- *Type:* double

---

##### `PasswordMinUpperCaseChars`<sup>Required</sup> <a name="PasswordMinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.passwordMinUpperCaseChars"></a>

```csharp
public double PasswordMinUpperCaseChars { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public PasswordPolicyDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyDescribeOutput">PasswordPolicyDescribeOutput</a>

---


### PasswordPolicyShowOutputList <a name="PasswordPolicyShowOutputList" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.get"></a>

```csharp
private PasswordPolicyShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PasswordPolicyShowOutputOutputReference <a name="PasswordPolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput">PasswordPolicyShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutputOutputReference.property.internalValue"></a>

```csharp
public PasswordPolicyShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyShowOutput">PasswordPolicyShowOutput</a>

---


### PasswordPolicyTimeoutsOutputReference <a name="PasswordPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PasswordPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PasswordPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---



