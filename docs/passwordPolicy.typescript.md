# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktn/provider-snowflake.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy snowflake_password_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

new passwordPolicy.PasswordPolicy(scope: Construct, id: string, config: PasswordPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig">PasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory">resetHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins">resetLockoutTimeMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays">resetMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays">resetMinAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars">resetMinLowerCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars">resetMinNumericChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars">resetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars">resetMinUpperCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace">resetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: PasswordPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetHistory` <a name="resetHistory" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory"></a>

```typescript
public resetHistory(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists"></a>

```typescript
public resetIfNotExists(): void
```

##### `resetLockoutTimeMins` <a name="resetLockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins"></a>

```typescript
public resetLockoutTimeMins(): void
```

##### `resetMaxAgeDays` <a name="resetMaxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays"></a>

```typescript
public resetMaxAgeDays(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetMinAgeDays` <a name="resetMinAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays"></a>

```typescript
public resetMinAgeDays(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetMinLowerCaseChars` <a name="resetMinLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars"></a>

```typescript
public resetMinLowerCaseChars(): void
```

##### `resetMinNumericChars` <a name="resetMinNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars"></a>

```typescript
public resetMinNumericChars(): void
```

##### `resetMinSpecialChars` <a name="resetMinSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars"></a>

```typescript
public resetMinSpecialChars(): void
```

##### `resetMinUpperCaseChars` <a name="resetMinUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars"></a>

```typescript
public resetMinUpperCaseChars(): void
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace"></a>

```typescript
public resetOrReplace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

passwordPolicy.PasswordPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

passwordPolicy.PasswordPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

passwordPolicy.PasswordPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

passwordPolicy.PasswordPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PasswordPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PasswordPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput">historyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput">lockoutTimeMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput">maxAgeDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput">minAgeDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput">minLowerCaseCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput">minNumericCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput">minSpecialCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput">minUpperCaseCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput">orReplaceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.history">history</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins">lockoutTimeMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays">maxAgeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays">minAgeDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars">minLowerCaseChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars">minNumericChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars">minSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars">minUpperCaseChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace">orReplace</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: PasswordPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `historyInput`<sup>Optional</sup> <a name="historyInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput"></a>

```typescript
public readonly historyInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput"></a>

```typescript
public readonly ifNotExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lockoutTimeMinsInput`<sup>Optional</sup> <a name="lockoutTimeMinsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput"></a>

```typescript
public readonly lockoutTimeMinsInput: number;
```

- *Type:* number

---

##### `maxAgeDaysInput`<sup>Optional</sup> <a name="maxAgeDaysInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput"></a>

```typescript
public readonly maxAgeDaysInput: number;
```

- *Type:* number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `minAgeDaysInput`<sup>Optional</sup> <a name="minAgeDaysInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput"></a>

```typescript
public readonly minAgeDaysInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `minLowerCaseCharsInput`<sup>Optional</sup> <a name="minLowerCaseCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput"></a>

```typescript
public readonly minLowerCaseCharsInput: number;
```

- *Type:* number

---

##### `minNumericCharsInput`<sup>Optional</sup> <a name="minNumericCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput"></a>

```typescript
public readonly minNumericCharsInput: number;
```

- *Type:* number

---

##### `minSpecialCharsInput`<sup>Optional</sup> <a name="minSpecialCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput"></a>

```typescript
public readonly minSpecialCharsInput: number;
```

- *Type:* number

---

##### `minUpperCaseCharsInput`<sup>Optional</sup> <a name="minUpperCaseCharsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput"></a>

```typescript
public readonly minUpperCaseCharsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput"></a>

```typescript
public readonly orReplaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PasswordPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `history`<sup>Required</sup> <a name="history" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.history"></a>

```typescript
public readonly history: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lockoutTimeMins`<sup>Required</sup> <a name="lockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins"></a>

```typescript
public readonly lockoutTimeMins: number;
```

- *Type:* number

---

##### `maxAgeDays`<sup>Required</sup> <a name="maxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays"></a>

```typescript
public readonly maxAgeDays: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `minAgeDays`<sup>Required</sup> <a name="minAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays"></a>

```typescript
public readonly minAgeDays: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `minLowerCaseChars`<sup>Required</sup> <a name="minLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars"></a>

```typescript
public readonly minLowerCaseChars: number;
```

- *Type:* number

---

##### `minNumericChars`<sup>Required</sup> <a name="minNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars"></a>

```typescript
public readonly minNumericChars: number;
```

- *Type:* number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars"></a>

```typescript
public readonly minSpecialChars: number;
```

- *Type:* number

---

##### `minUpperCaseChars`<sup>Required</sup> <a name="minUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars"></a>

```typescript
public readonly minUpperCaseChars: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace"></a>

```typescript
public readonly orReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

const passwordPolicyConfig: passwordPolicy.PasswordPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database">database</a></code> | <code>string</code> | The database this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name">name</a></code> | <code>string</code> | Identifier for the password policy; must be unique for your account. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema">schema</a></code> | <code>string</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment">comment</a></code> | <code>string</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history">history</a></code> | <code>number</code> | (Default: `0`) Specifies the number of the most recent passwords that Snowflake stores. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists">ifNotExists</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `false`) Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins">lockoutTimeMins</a></code> | <code>number</code> | (Default: `15`) Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays">maxAgeDays</a></code> | <code>number</code> | (Default: `90`) Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength">maxLength</a></code> | <code>number</code> | (Default: `256`) Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | (Default: `5`) Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays">minAgeDays</a></code> | <code>number</code> | (Default: `0`) Specifies the number of days the user must wait before a recently changed password can be changed again. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength">minLength</a></code> | <code>number</code> | (Default: `8`) Specifies the minimum number of characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars">minLowerCaseChars</a></code> | <code>number</code> | (Default: `1`) Specifies the minimum number of lowercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars">minNumericChars</a></code> | <code>number</code> | (Default: `1`) Specifies the minimum number of numeric characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars">minSpecialChars</a></code> | <code>number</code> | (Default: `1`) Specifies the minimum number of special characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars">minUpperCaseChars</a></code> | <code>number</code> | (Default: `1`) Specifies the minimum number of uppercase characters the password must contain. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace">orReplace</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `false`) Whether to override a previous password policy with the same name. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Identifier for the password policy; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `history`<sup>Optional</sup> <a name="history" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history"></a>

```typescript
public readonly history: number;
```

- *Type:* number

(Default: `0`) Specifies the number of the most recent passwords that Snowflake stores.

These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history. Default: 0 Max: 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#history PasswordPolicy#history}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `false`) Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockoutTimeMins`<sup>Optional</sup> <a name="lockoutTimeMins" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins"></a>

```typescript
public readonly lockoutTimeMins: number;
```

- *Type:* number

(Default: `15`) Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `maxAgeDays`<sup>Optional</sup> <a name="maxAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays"></a>

```typescript
public readonly maxAgeDays: number;
```

- *Type:* number

(Default: `90`) Specifies the maximum number of days before the password must be changed.

Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

(Default: `256`) Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

(Default: `5`) Specifies the maximum number of attempts to enter a password before being locked out.

Supported range: 1 to 10, inclusive. Default: 5

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `minAgeDays`<sup>Optional</sup> <a name="minAgeDays" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays"></a>

```typescript
public readonly minAgeDays: number;
```

- *Type:* number

(Default: `0`) Specifies the number of days the user must wait before a recently changed password can be changed again.

Supported range: 0 to 999, inclusive. Default: 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

(Default: `8`) Specifies the minimum number of characters the password must contain.

Supported range: 8 to 256, inclusive. Default: 8

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `minLowerCaseChars`<sup>Optional</sup> <a name="minLowerCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars"></a>

```typescript
public readonly minLowerCaseChars: number;
```

- *Type:* number

(Default: `1`) Specifies the minimum number of lowercase characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `minNumericChars`<sup>Optional</sup> <a name="minNumericChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars"></a>

```typescript
public readonly minNumericChars: number;
```

- *Type:* number

(Default: `1`) Specifies the minimum number of numeric characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars"></a>

```typescript
public readonly minSpecialChars: number;
```

- *Type:* number

(Default: `1`) Specifies the minimum number of special characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `minUpperCaseChars`<sup>Optional</sup> <a name="minUpperCaseChars" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars"></a>

```typescript
public readonly minUpperCaseChars: number;
```

- *Type:* number

(Default: `1`) Specifies the minimum number of uppercase characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace"></a>

```typescript
public readonly orReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `false`) Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PasswordPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}

---

### PasswordPolicyTimeouts <a name="PasswordPolicyTimeouts" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.Initializer"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

const passwordPolicyTimeouts: passwordPolicy.PasswordPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#create PasswordPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#delete PasswordPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#read PasswordPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#update PasswordPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#create PasswordPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#delete PasswordPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#read PasswordPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/password_policy#update PasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PasswordPolicyTimeoutsOutputReference <a name="PasswordPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { passwordPolicy } from '@cdktn/provider-snowflake'

new passwordPolicy.PasswordPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PasswordPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---



